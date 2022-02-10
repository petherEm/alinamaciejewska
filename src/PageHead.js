import Head from "next/head";
const PageHead = ({ page }) => {
  return (
    <Head>
      <title>Alina Maciejewska | {page}</title>
    </Head>
  );
};

export default PageHead;
