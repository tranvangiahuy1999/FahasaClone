import React from "react";
import ProductsListOfTag from "./Component/ProductsListOfTag";
import ProductListOfBoxTag from "./Component/ProductListOfBoxTag";
import ProductsHaveVisitedList from "./Component/ProductsHaveVisitedList";

const HomePage = () => {
  return (
    <div className="main-container mt-3 mb-5">
      <ProductsListOfTag></ProductsListOfTag>
      <ProductListOfBoxTag></ProductListOfBoxTag>
      <ProductsHaveVisitedList></ProductsHaveVisitedList>
    </div>
  );
};

export default HomePage;
