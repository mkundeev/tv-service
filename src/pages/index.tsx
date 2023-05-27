import Head from "next/head";
import { Layout } from "@/components/common/Layout";
import HomeMain from "@/components/Home/HomeMain";
import HomeHero from "@/components/Home/HomeHero";
import HomeService from "@/components/Home/HomeService";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next project</title>
      </Head>
      <HomeHero />
      <HomeMain />
      <HomeService />
    </Layout>
  );
}
