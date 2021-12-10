import React, { useEffect, useState } from "react";
import ProductsListOfTag from "./Component/ProductsListOfTag";
import ProductListOfBoxTag from "./Component/ProductListOfBoxTag";
import ProductsHaveVisitedList from "./Component/ProductsHaveVisitedList";
import Header from "./Component/Header";
import shopApis from '../../apis/ShopApis';

const HomePage = () => {
  const [boxtagData, setBoxtagData] = useState([])

  useEffect(() => {
    getHomeBoxtagData(0, 10)
  }, [])

  const getHomeBoxtagData = async (skip, limit) => {
    try {
      const res = await shopApis.getBoxTagList(skip, limit);
      if (res.status === 200) {
        setBoxtagData([...res.data])
      }
    } catch (e) {

    }
  }

  return (
    <div className="main-container mt-3 mb-5">
      <Header></Header>      
      {
        boxtagData.length ? boxtagData.map((value) => (
          <ProductListOfBoxTag key={value._id} boxtagData={value}></ProductListOfBoxTag>
        )) :
          <></>
      }
      <ProductsHaveVisitedList></ProductsHaveVisitedList>
    </div>
  );
};

export default HomePage;
