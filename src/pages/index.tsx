import Head from "next/head";
import { Layout } from "@/components/common/Layout";
import HomeMain from "@/components/Home/HomeMain";
import HomeHero from "@/components/Home/HomeHero";
import HomeService from "@/components/Home/HomeService";
import HomeBrands from "@/components/Home/HomeBrands";
import HomeMap from "@/components/Home/HomeMap";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next project</title>
      </Head>
      <div style={{ height: "100px" }}></div>
      <HomeHero />
      <HomeMain />
      <HomeService />
      <HomeBrands />
      <HomeMap />
    </Layout>
  );
}
