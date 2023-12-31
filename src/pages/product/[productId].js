import RootLayout from "@/components/Layout/RootLayout";
import ProductDetails from "@/components/ProductDetails";
import React from "react";

const ProductDetailsPage = ({ products }) => {
  const product = products[0];
  return (
    <div className="min-h-screen my-4 w-11/12 mx-auto">
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-server-three.vercel.app/products"
  );
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://pc-builder-server-three.vercel.app/products?id=${params.productId}`
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
