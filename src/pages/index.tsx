import Head from "next/head";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next project</title>
      </Head>
      <>
        <h1>Next.js project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          voluptatibus voluptate, nostrum earum sed aut tempore exercitationem
          architecto consectetur officia similique ducimus neque. Provident
          recusandae voluptas rerum, ut ducimus adipisci.
        </p>
      </>
    </Layout>
  );
}
