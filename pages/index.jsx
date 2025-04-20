import Link from "next/link";
import { Layout } from "../components/Layout";
import utils from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utils.headingMd}>
        <p>私はフルスタックエンジニアです</p>
      </section>
      <section>
        <h2>📝エンジニアのブログ</h2>
        <div>
          <article>
            <Link href="#">
              <img src="/images/thumbnail01.jpg" />
            </Link>
            <Link href="#">ブログタイトル1</Link>
            <br />
            <small>2024/11/16</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
