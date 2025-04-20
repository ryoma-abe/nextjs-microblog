import Link from "next/link";
import { Layout } from "../components/Layout";
import utils from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utils.headingMd}>
        <p>私はフルスタックエンジニアです</p>
      </section>
      <div>
        <article>
          <Link href="#">
            <img src="/images/thumbnail01.jpg" />
          </Link>
        </article>
      </div>
    </Layout>
  );
}
