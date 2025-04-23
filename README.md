---
title: "Next.js で学んだ静的ブログ構築の基礎知識まとめ"
date: "2025-04-23"
tags: ["Next.js", "ブログ", "Markdown", "SSG"]
---

## \_app.js と Link の注意点

- `\_app.js` は、**グローバルなスタイルや共通レイアウト**を適用したいときに使う。
- `Link` コンポーネントに `a` タグを **ネストするのは非推奨**。Next.js 13 以降では、`<Link href="/about">About</Link>` のように使うのが正解。

---

## postsDirectory とは何か？

- `process.cwd()` は、**プロジェクトのルートディレクトリ**を返す。
- `path.join(process.cwd(), "posts")` によって、**posts フォルダの絶対パス**を生成。
- つまり、`postsDirectory` は Markdown ファイルを格納するベースフォルダのこと。

---

## getPostData の仕組み

```js
const fileNames = fs.readdirSync(postsDirectory);
```

````

- `fs.readdirSync()` は、指定ディレクトリ内の **ファイル名（文字列）配列**を返す。
- 返り値例：`["hello.md", "next.md"]`

```js
const id = fileName.replace(/\.md$/, "");
```

- `.md` を取り除いて `id` にするための処理。
- `/\.md$/` の正規表現：
  - `\.` は **ドット文字そのもの**
  - `$` は **文字列の終わり**
  - → つまり「.md で終わる文字列だけ」にマッチする。

---

## path.join とファイルパス

```js
const fullPath = path.join(postsDirectory, fileName);
```

- ディレクトリとファイル名を結合して、**絶対パス（例：`/Users/ryoma/blog/posts/hello.md`）**を生成。

---

## gray-matter でフロントマターを取得

```js
const matterResult = matter(fileContents);
```

- Markdown ファイルから、**メタデータ（YAML）と本文**を分離。
- `matterResult.data`：フロントマター
- `matterResult.content`：Markdown 本文

---

## fallback: false の意味

```js
export async function getStaticPaths() {
  return {
    paths: [...],
    fallback: false,
  };
}
```

- `fallback: false` は、**事前ビルドしたページのみアクセス可能にする**設定。
- 指定していないパスにアクセスすると **404 ページが表示される**。
- 本当に必要なページだけを静的生成したい場合に使用。

---

このまとめは、Next.js で Markdown ブログを構築する際に最低限知っておきたい基本構文とその意味を整理したものです。
今後さらに `getStaticProps`, `getStaticPaths`, `Markdown → HTML変換` に発展していく際にも基盤になります。

```

---
````

fallback→ 準備されたページ以外の制御
