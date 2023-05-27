import Head from "next/head";
import { Layout } from "@/components/common/Layout";
import HomeMain from "@/components/Home/HomeMain";
import HomeHero from "@/components/Home/HomeHero";
import HomeService from "@/components/Home/HomeService";
import HomeBrands from "@/components/Home/HomeBrands";

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
    </Layout>
  );
}
