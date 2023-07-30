import LinkCard from "@/components/LinkCard";

const CategoriesPage = ({ categories }) => {
  return (
    <div className="my-3">
      <h1 className="text-center text-3xl">All Cetegories</h1>
      <div className="grid grid-cols-3 gap-4 my-4 w-11/12 mx-auto">
        {categories?.map((category) => (
          <LinkCard key={category} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
