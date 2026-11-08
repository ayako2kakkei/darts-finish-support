# サポートサイト引き継ぎ

## 2026-11-08 Issue #5 共通ヘッダーと言語切り替え

- 作業: `codex/issue-5-localized-header` / `/private/tmp/darts-support-issue-5`。ユーザーの最終希望は14言語、ポルトガル語をブラジル・ポルトガルに分けて15ロケール。
- トップ、サポート、各プライバシーにアプリのスプラッシュ画像と同じロゴ、共通ナビゲーション、言語プルダウンを追加。900px以下では右側メニューを表示。既存の `support.html#<locale>` と `privacy-<locale>.html` を維持。
- オランダ語、イタリア語、ポルトガル語（ブラジル・ポルトガル）、ポーランド語の本文とポリシーを追加。
- 検証: ローカルHTTPで日本語→オランダ語トップ→サポート→ポリシー、ポリシーからポルトガル（ポルトガル）への切り替えを確認。18 HTMLページ、15ロケールの選択肢とローカルリンク・画像の存在を解析して成功。`git diff --check` 成功。スマホ幅の実画面確認、公開サイトへの反映は未実施。
- 次: スマホ幅・キーボード操作を実画面確認し、コミット/PR/CI/マージ。XServerの公開ファイルを更新し各URLを確認。アプリ本体の追加翻訳は別Issue #510。

## 2026-11-06 Issue #1
- 公開元: ayako2kakkei/darts-finish-support、GitHub Pages。
- サポートメールをsupport-app@dartsfinish.comへ変更。index.htmlとprivacy.html（日英）の3か所、表示とmailtoを更新。アプリ本体に旧アドレスなし。
- 検証:2ページのHTML解析、メールリンクが新窓口であること、旧アドレス不在、git diff --check。メール受信の疎通は未検証。
- branch codex/issue-1-support-email / worktree /private/tmp/darts-issue-1。次:PR/Pages公開確認。

## #3 プライバシーと問い合わせ案内の10言語化

- アプリの翻訳を元に個別ポリシーURLを10件追加し、問い合わせ案内と既存入口に言語切り替えを追加。
- HTML 13ページのローカルリンクとアンカーを検証。XServerへの公開と公開URL確認が残る。
- codex/issue-3-localized-privacy、/private/tmp/darts-support-issue-3。
