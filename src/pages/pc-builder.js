import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const PCBuilderPage = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center">pc-builder</h1>
    </div>
  );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
