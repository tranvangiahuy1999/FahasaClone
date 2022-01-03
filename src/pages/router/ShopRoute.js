import { Route, Switch } from "react-router-dom";

import Homepage from "../client/Index";
import Receipt from "../client/Component/Receipt";
import ProductDetail from "../client/Component/ProductDetail";
import ProductList from "../client/Component/ProductList";
import SearchProductList from "../client/Component/SearchProductList";
import Nav from "../client/Component/Nav";
import Footer from "../client/Component/Footer";
import Service from "../client/Component/Service";
import ScrollToTopButton from '../client/Component/ScrollToTopButton'
import { useState } from "react";

const ShopRoute = () => {
  const [badgeNumber,setBadgeNumber] = useState(0);
  const addBadgeNumber = (num) =>{
    console.log("hello world");
    setBadgeNumber(badgeNumber + num);
  }
  return (
    <div style={{ background: "#F0F0F0" }}>
      <Nav badgeNumber={badgeNumber}/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/gio-hang" render={() => <Receipt handleBadge = {addBadgeNumber}/>} />
        <Route exact path="/chi-tiet" render={() => <ProductDetail handleBadge = {addBadgeNumber}/>} />
        <Route path="/chi-tiet/:slug.:id" render={() => <ProductDetail handleBadge = {addBadgeNumber}/>} />
        <Route path="/danh-sach" component={ProductList} />
        <Route path="/ket-qua" component={SearchProductList} />
      </Switch>
      <ScrollToTopButton/>
      <Service />
      <Footer />
    </div>
  );
};

export default ShopRoute;
