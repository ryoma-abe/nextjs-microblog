import path from "path";
import fs from "fs";

// ルートディレクトリ/postsになる
const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルのデータを取り出す
export const getPostData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    // mdを文字列として取り出す
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
  });
};
