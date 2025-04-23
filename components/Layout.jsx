import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utils from "../styles/utils.module.css";
const name = "RyoCode";
export const siteTitle = "Next Blog";

export const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              className={`${utils.borderCircle} ${styles.headerHomeImage}`}
              src="/images/profile.jpg"
              width={100}
              height={100}
            />
            <h1 className={utils.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Image
              className={utils.borderCircle}
              src="/images/profile.jpg"
              width={100}
              height={100}
            />
            <h1 className={utils.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};
