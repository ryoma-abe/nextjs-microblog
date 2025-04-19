import Head from "next/head";
import Image from "next/image";

export const Layout = () => {
  return (
    <>
      <Head>
        <title></title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <header>
        <Image src="/images/ryocode.png" width={100} height={100} />
      </header>
    </>
  );
};
