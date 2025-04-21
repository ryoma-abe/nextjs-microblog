import Link from "next/link";
import { Layout } from "../components/Layout";
import utils from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { getPostData } from "@/lib/post";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utils.headingMd}>
        <p>私はフルスタックエンジニアです</p>
      </section>
      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="#">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="#" className={utils.boldText}>
              ブログタイトル1
            </Link>
            <br />
            <small className={utils.lightText}>2024/11/16</small>
          </article>
          <article>
            <Link href="#">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="#" className={utils.boldText}>
              ブログタイトル1
            </Link>
            <br />
            <small className={utils.lightText}>2024/11/16</small>
          </article>
          <article>
            <Link href="#">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="#" className={utils.boldText}>
              ブログタイトル1
            </Link>
            <br />
            <small className={utils.lightText}>2024/11/16</small>
          </article>
          <article>
            <Link href="#">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="#" className={utils.boldText}>
              ブログタイトル1
            </Link>
            <br />
            <small className={utils.lightText}>2024/11/16</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
