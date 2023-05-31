import Head from "next/head";
import AboutPage from "@/components/AboutPage/AboutPage";
import { useRouter } from "next/router";
import { Layout } from "@/components/common/Layout";

export default function About() {
  const { locale } = useRouter();
  return (
    <Layout>
      <Head>
        <title>
          {locale === "ua"
            ? "Ремонт телевізорів в Києві з гарантією"
            : "Ремонт телевизоров в Киеве с гарантией"}
        </title>
        <meta
          name="description"
          key="desc"
          content={
            locale === "ua"
              ? "Ремонт та дыагностика всіх типів телевізорів – кінескопні, рідкокристалічні (LED, LCD), плазмові."
              : "Ремонт и диагностика всех типов телевизоров – кинескопные, жидкокристаллические (LED, LCD), плазменные."
          }
        />
      </Head>
      <AboutPage />
    </Layout>
  );
}
