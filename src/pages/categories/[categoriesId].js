import RootLayout from "@/components/Layout/RootLayout";
import ProductCard from "@/components/ProductCard";

const SingleCategory = ({ products }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default SingleCategory;
SingleCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-server-three.vercel.app/categories"
  );
  const categories = await res.json();
  const paths = categories?.map((category) => ({
    params: { categoriesId: category },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://pc-builder-server-three.vercel.app/products?category=${params.categoriesId}`
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
