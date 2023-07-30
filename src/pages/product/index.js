import ProductCard from "@/components/ProductCard";

const ProductPage = ({ products }) => {
  return (
    <div className="my-3">
      <h1 className="text-center text-3xl">Features Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.slice(0, 6)?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
