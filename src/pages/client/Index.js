import React from "react";
import ProductsListOfTag from "./Component/ProductsListOfTag";
import ProductListOfBoxTag from "./Component/ProductListOfBoxTag";

const HomePage = () => {
  return (
    <div className="main-container mt-3 mb-5">
      <ProductsListOfTag></ProductsListOfTag>
      <ProductListOfBoxTag></ProductListOfBoxTag>
    </div>
  );
};

export default HomePage;
