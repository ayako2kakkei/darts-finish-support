"""dartsfinish.com へ FTPS で差分アップロードする。

使い方（リポジトリのルートで）:
  python3 scripts/deploy_ftps.py --dry-run index.html home.js img/ja
  python3 scripts/deploy_ftps.py index.html home.js img/ja

- 引数はリポジトリ直下からの相対パス。フォルダは中のファイルをすべて対象にする。
- 認証は ~/.netrc（ホスト sv828.xserver.jp）。パスワードは表示しない。
- 各ファイルは一時名で上げて読み戻し、SHA-256 が一致してから置き換える。
- .htaccess / .user.ini / default_page.png などサーバー側の既存ファイルには触れない。
- アップロード後、公開URLで必ず目視確認すること（docs/DEPLOY.md）。
"""

import argparse
import io
import time
from ftplib import FTP_TLS, error_perm
from hashlib import sha256
from netrc import netrc
from pathlib import Path

HOST = "sv828.xserver.jp"
ROOT = Path(__file__).resolve().parents[1]
PROTECTED = {".htaccess", ".user.ini", "default_page.png"}


def collect(paths):
    files = []
    for name in paths:
        target = (ROOT / name).resolve()
        if ROOT not in target.parents and target != ROOT:
            raise SystemExit(f"リポジトリの外は指定できません: {name}")
        if target.is_dir():
            files.extend(p for p in sorted(target.rglob("*")) if p.is_file())
        elif target.is_file():
            files.append(target)
        else:
            raise SystemExit(f"見つかりません: {name}")
    out = []
    for p in files:
        rel = p.relative_to(ROOT).as_posix()
        if rel.startswith((".git/", ".github/", "scripts/", "docs/")) or p.name in PROTECTED or p.name.endswith(".md"):
            raise SystemExit(f"公開対象ではありません: {rel}")
        out.append((p, rel))
    return out


def ensure_dirs(ftp, rel):
    parts = rel.split("/")[:-1]
    for i in range(1, len(parts) + 1):
        try:
            ftp.mkd("/".join(parts[:i]))
        except error_perm as e:
            if not str(e).startswith("550"):
                raise


def upload_verified(ftp, local, rel):
    data = local.read_bytes()
    ensure_dirs(ftp, rel)
    pending = f"{rel}.part"
    ftp.storbinary(f"STOR {pending}", io.BytesIO(data))
    got = bytearray()
    ftp.retrbinary(f"RETR {pending}", got.extend)
    if sha256(got).digest() != sha256(data).digest():
        ftp.delete(pending)
        raise RuntimeError(f"読み戻しが一致しません: {rel}")
    backup = f"{rel}.backup-{time.time_ns()}"
    had_previous = False
    try:
        ftp.rename(rel, backup)
        had_previous = True
    except error_perm as e:
        if not str(e).startswith("550"):
            raise
    try:
        ftp.rename(pending, rel)
    except Exception:
        if had_previous:
            ftp.rename(backup, rel)
        raise
    if had_previous:
        ftp.delete(backup)
    print(f"OK {rel} ({len(data)} bytes)")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("paths", nargs="+")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    files = collect(args.paths)
    if args.dry_run:
        for _, rel in files:
            print(rel)
        print(f"{len(files)} files")
        return
    login, _, password = netrc().authenticators(HOST)
    with FTP_TLS(HOST, timeout=60) as ftp:
        ftp.login(login, password)
        ftp.prot_p()
        for local, rel in files:
            upload_verified(ftp, local, rel)


if __name__ == "__main__":
    main()
