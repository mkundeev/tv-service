import Head from "next/head";
import { Layout } from "@/components/common/Layout";
import HomeMain from "@/components/Home/HomeMain";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next project</title>
      </Head>
      <HomeMain />
    </Layout>
  );
}
