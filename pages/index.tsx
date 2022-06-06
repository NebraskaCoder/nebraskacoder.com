import type { NextPage } from "next";
import Head from "next/head";

import ComingSoon from "@components/maintenance/ComingSoon";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gabriel Graves (NebraskaCoder)</title>
      </Head>
      <main>
        <ComingSoon />
      </main>
    </>
  );
};

export default Home;
