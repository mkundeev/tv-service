import Head from "next/head";
import { useRouter } from "next/router";
import Map from "@/components/Map/Map";
import { Layout } from "@/components/common/Layout";
export default function Contacts() {
  const { locale } = useRouter();
  return (
    <Layout>
      <Head>
        <title>
          {locale === "ua"
            ? "Майстерня з ремонту телевізорів в Києві"
            : "Мастерская по ремонту телевизоров в Киеве"}
        </title>
        <meta
          name="description"
          key="desc"
          content={
            locale === "ua"
              ? "Ремонт телевізорів усіх моделей в Києві. Виклик майстра з ремонту телевізора до дому. Діагностика та налаштування телевізорів."
              : "Ремонт телевизоров всех моделей в Киеве. Вызов мастера по ремонту телевизора на дом. Диагностика и настройка телевизоров."
          }
        />
      </Head>
      <Map />
    </Layout>
  );
}
