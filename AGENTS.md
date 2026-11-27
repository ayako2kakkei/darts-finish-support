# エージェント共通ルール（darts-finish-support）

dartsfinish.com のソース。作業ルール（Issue 起点・worktree・ブランチ名 `codex/` `claude/`・コミットは日本語・PR は CI 成功後にマージ）は、アプリ本体リポジトリ `darts-finish-app` の `AGENTS.md` と同じ。

- 検証: `python3 scripts/check_site.py` と `node --check site.js`、`git diff --check`。
- 公開は手動（FTPS）。手順は [docs/DEPLOY.md](docs/DEPLOY.md)、スクリプトは `scripts/deploy_ftps.py`。`~/.netrc` の中身は表示・記録しない。Mac では curl 禁止。
- ストア登録・スクショ・ビルドなどの手順は `darts-finish-app` の `docs/ops/README.md`。
- 作業ログは `HANDOFF.md` に追記。
