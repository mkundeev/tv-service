import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/global.styled";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
