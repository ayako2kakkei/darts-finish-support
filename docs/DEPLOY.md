# dartsfinish.com の公開手順

main へのマージでは公開されない。XServer へ手動でアップロードする。

## 手順（Mac）

1. 変更を PR → CI（`python3 scripts/check_site.py`、`node --check site.js`）→ main にマージ。
2. main を最新にする: `git checkout main && git pull`。
3. 変えたファイルだけを確認: `python3 scripts/deploy_ftps.py --dry-run index.html home.js`
4. 公開: `python3 scripts/deploy_ftps.py index.html home.js`（フォルダも指定可: `img/ja`）。
5. 公開URL（https://dartsfinish.com/）を開き、言語別の表示を目視確認。

## 守ること

- 認証は Mac の `~/.netrc`（ホスト `sv828.xserver.jp`、FTP のルートが `public_html`）。**中身を表示・記録しない。**
- Mac では `curl` 禁止。Python の `ftplib`（FTPS）を使う（スクリプトは実装済み）。
- CSS / JS を変えたら各 HTML の版クエリ（例 `site.js?v=...`）を上げてキャッシュを更新する。
- サーバーの `.htaccess` `.user.ini` `default_page.png` と Search Console の所有権確認ファイルは消さない。
- 10MB 超の大量アップロードで FTPS が不安定なら、分割して上げる。
- サーバーに過去の展開用 zip が17個残っている（削除はユーザー未決定。勝手に消さない）。
- 制作者の個人情報は載せない。サイトで販売しない（App Store / Google Play へのリンクのみ）。

## 素材

- LP の画像・動画の撮影と配置は、アプリのリポジトリ `darts-finish-app` の `website/`（`README.md`、`tools/README.md`）。
- 新しい言語の追加は `scripts/check_site.py` の `LOCALES`、`site.js`、各 HTML を揃える。
