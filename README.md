\_app.js はグローバルのスタイルを当てるためにつかう
Link コンポーネントの中に a タグを配置するのは NG になった

## postsDirectory

- `process.cwd()` はプロジェクトのルートフォルダを指す。
- `path.join()` でその中の "posts" フォルダの場所を作る。
- つまり、`postsDirectory` は "posts" フォルダの絶対パスになる。
