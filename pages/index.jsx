import Link from "next/link";
import { Layout, siteTitle } from "../components/Layout";
import utils from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { getPostsData } from "@/lib/post";
import Head from "next/head";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utils.headingMd}>
        <p>私は北海道のエンジニアです/侍エンジニアの講師をしています。</p>
      </section>
      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={thumbnail} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`} className={utils.boldText}>
                {title}
              </Link>
              <br />
              <small className={utils.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
