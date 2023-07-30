import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const PCBuilderPage = () => {
  return (
    <div className="min-h-screen">
      <h1>pc-builder</h1>
    </div>
  );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
