import { FC } from "react";
import Head from "next/head";
import HomeTemplate from "~/components/templates/Home";

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>TOP</title>
      </Head>
      <HomeTemplate></HomeTemplate>
    </div>
  );
};
export default Home;
