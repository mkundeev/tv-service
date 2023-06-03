import Head from "next/head";
import { useRouter } from "next/router";
import ServicesDiagnostic from "@/components/Services/ServicesDiagnostic";
import ServicesRepair from "@/components/Services/ServicesRepair";
import ServicesSetting from "@/components/Services/ServicesSetting";
import Divider from "@/components/common/Divider";

export default function Services() {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>
          {locale === "ua"
            ? "Ремонт та діагностика телевізорів в Києві"
            : "Ремонт и диагностика телевизоров в Киеве"}
        </title>
        <meta
          name="description"
          key="desc"
          content={
            locale === "ua"
              ? "Виконуємо ремонт всіх типів телевізорів – кінескопні, рідкокристалічні (LED, LCD), плазмові. Діагностика неспровностей телевізора."
              : "Выполняем ремонт всех типов телевизоров – кинескопные, жидкокристаллические (LED, LCD), плазменные. Диагностика неисправностей телевизора."
          }
        />
      </Head>
      <ServicesRepair />
      <Divider />
      <ServicesDiagnostic />
      <Divider />
      <ServicesSetting />
    </>
  );
}
