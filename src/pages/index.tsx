// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import Head from "next/head";
import Home from "~/components/templates/Home";

const HomePage: FC = () => {
  return (
    <div>
      <Head>
        <title>TOP</title>
      </Head>
      <Home></Home>
    </div>
  );
};
export default HomePage;
