import React from "react";
import ProductsListOfTag from "./Component/ProductsListOfTag";
import ProductListOfBoxTag from "./Component/ProductListOfBoxTag";
import ProductsHaveVisitedList from "./Component/ProductsHaveVisitedList";
import Header from "./Component/Header";

const HomePage = () => {
  return (
    <div className="main-container mt-3 mb-5">
      <Header></Header>
      <ProductsListOfTag></ProductsListOfTag>
      <ProductListOfBoxTag></ProductListOfBoxTag>
      <ProductsHaveVisitedList></ProductsHaveVisitedList>
    </div>
  );
};

export default HomePage;
