import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hello from "../components/hello";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Library</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen justify-center">
        <Hello />
      </div>
    </div>
  );
};

export default Home;
