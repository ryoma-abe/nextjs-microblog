import Head from "next/head";
import Image from "next/image";
const name = "RyoCode";
export const siteTitle = "Next Blog";

export const Layout = () => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <header>
        <Image src="/images/ryocode.png" width={100} height={100} />
      </header>
      <h1>{name}</h1>
    </>
  );
};
