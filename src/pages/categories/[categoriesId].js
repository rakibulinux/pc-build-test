import RootLayout from "@/components/Layout/RootLayout";

const SingleCategory = () => {
  return (
    <div className="min-h-screen">
      <h1>I am single</h1>
    </div>
  );
};

export default SingleCategory;
SingleCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
