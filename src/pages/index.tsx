import Head from "next/head";
import { Layout } from "@/components/common/Layout";
import HomeMain from "@/components/Home/HomeMain";
import HomeHero from "@/components/Home/HomeHero";
import HomeService from "@/components/Home/HomeService";
import HomeBrands from "@/components/Home/HomeBrands";
import HomeMap from "@/components/Home/HomeMap";
import Divider from "@/components/common/Divider";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next project</title>
      </Head>

      <HomeHero />
      <HomeMain />
      <Divider />
      <HomeService />
      <HomeBrands />
      <HomeMap />
    </Layout>
  );
}
