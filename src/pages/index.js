import Hero from "@/components/Hero";
import RootLayout from "@/components/Layout/RootLayout";
import auth from "@/firebase/firebase.auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
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
