import Hero from "@/components/Hero";
import RootLayout from "@/components/Layout/RootLayout";
import { useSession } from "next-auth/react";
import Head from "next/head";
const HomePage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>PC BUILDER</title>
      </Head>
      <Hero />
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
