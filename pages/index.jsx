import { Layout } from "../components/Layout";
import utils from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utils.headingMd}>
        <p>私はフルスタックエンジニアです</p>
      </section>
    </Layout>
  );
}
