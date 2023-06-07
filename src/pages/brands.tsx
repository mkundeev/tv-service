import Head from "next/head";
import { useRouter } from "next/router";
import BrandsPage from "@/components/BrandsPage/BrandsPage";
export default function Brands() {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>
          {locale === "ua"
            ? "Ремонт телевізорів усіх марок "
            : "Ремонт телевизоров всех марок"}
        </title>
        <meta
          name="description"
          key="desc"
          content={
            locale === "ua"
              ? "Ремонт телевізорів LG. Ремонт телевізорів Samsung. Ремонт телевізорів Toshiba. Ремонт телевізорів Xiaomi. Ремонт телевізорів Sony."
              : "Ремонт телевизоров LG. Ремонт телевизоров Samsung. Ремонт телевизоров Toshiba. Ремонт телевизоров Xiaomi. Ремонт телевизоров Sony."
          }
        />
      </Head>
      <BrandsPage />
    </>
  );
}
