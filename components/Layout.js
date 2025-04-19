import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
const name = "RyoCode";
export const siteTitle = "Next Blog";

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <header className={styles.header}>
        <Image src="/images/ryocode.png" width={100} height={100} />
      </header>
      <h1>{name}</h1>
      <main>{children}</main>
    </div>
  );
};
