import path from "path";
import fs from "fs";

// ルートディレクトリ/postsになる
const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルのデータを取り出す
export const getPostData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
  });
};
