import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/global.styled";
import { Layout } from "@/components/common/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
