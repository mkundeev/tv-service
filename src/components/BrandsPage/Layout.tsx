import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { getName } from "./utils/getName";

export default function Layout({ children }: { children: ReactNode }) {
  const { locale, pathname } = useRouter();
  const name = getName(pathname);

  return (
    <>
      <Head>
        <title>
          {locale === "ua"
            ? `Ремонт телевізорів ${name}`
            : `Ремонт телевизоров ${name}`}
        </title>
        <meta
          name="description"
          key="desc"
          content={
            locale === "ua"
              ? `Ремонт телевізорів ${name} у Києві`
              : `Ремонт телевізорів ${name} в Киеве`
          }
        />
      </Head>
      {children}
    </>
  );
}
