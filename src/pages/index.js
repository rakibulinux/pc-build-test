import Hero from "@/components/Hero";
import RootLayout from "@/components/Layout/RootLayout";
import { useSession } from "next-auth/react";
import Head from "next/head";
import ProductPage from "./product";
import CategoriesPage from "./categories";
const HomePage = ({ products }) => {
  const { data: session } = useSession();
  const categories = [
    "cpu_processor",
    "motherboard",
    "ram",
    "power_supply_unit",
    "storage_device",
    "monitor",
  ];
  return (
    <div>
      <Head>
        <title>PC BUILDER</title>
      </Head>
      <Hero />
      <ProductPage products={products} />
      <CategoriesPage categories={categories} />
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://pc-builder-server-three.vercel.app/products"
    );
    const data = await res.json();
    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
      },
    };
  }
}
