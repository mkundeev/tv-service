import Head from "next/head";
import { Layout } from "@/components/common/Layout";
import HomeMain from "@/components/Home/HomeMain";
import HomeHero from "@/components/Home/HomeHero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next project</title>
      </Head>
      <HomeHero />
      <HomeMain />
    </Layout>
  );
}
