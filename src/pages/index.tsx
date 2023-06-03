import { useRouter } from "next/router";
import Head from "next/head";
import HomeMain from "@/components/Home/HomeMain";
import HomeHero from "@/components/Home/HomeHero";
import HomeService from "@/components/Home/HomeService";
import HomeBrands from "@/components/Home/HomeBrands";
import Map from "@/components/Map/Map";
import Divider from "@/components/common/Divider";
import { structuredData } from "@/data/structuredData";

export default function Home() {
  const { locale } = useRouter();
  return (
    <>
      <>{locale === "ua" ? "" : ""}</>
      <Head>
        <title>
          {locale === "ua"
            ? "Ремонт телевізорів в Києві"
            : "Ремонт телевизоров в Киеве"}
        </title>
        <meta
          name="description"
          key="desc"
          content={
            locale === "ua"
              ? "Ремонт усіх моделей телевізорів в Києві. Виклик майстра з ремонту телевізора до дому. Діагностика та налаштування телевізорів."
              : "Ремонт всех моделей телевизоров в Киеве. Вызов мастера по ремонту телевизора на дом. Диагностика и настройка телевизоров."
          }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          key="jsonld"
        />
      </Head>
      <HomeHero />
      <HomeMain />
      <Divider />
      <HomeService />
      <HomeBrands />
      <Map />
    </>
  );
}
