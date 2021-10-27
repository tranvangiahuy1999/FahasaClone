import { Route, Switch } from "react-router-dom";

import Homepage from "../client/Index";
import Receipt from "../client/Component/Receipt";
import ProductDetail from "../client/Component/ProductDetail";
import ProductList from "../client/Component/ProductList";
import ProductSeachList from "../client/Component/ProductSearchList";
import Nav from "../client/Component/Nav";
import Header from "../client/Component/Header";
import Footer from "../client/Component/Footer";
import Service from "../client/Component/Service";

const ShopRoute = () => {
  return (
    <div style={{ background: "#F0F0F0" }}>
      <Nav />
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/gio-hang" component={Receipt} />
        <Route exact path="/chi-tiet" component={ProductDetail} />
        <Route path="/chi-tiet/:slug.:id" component={ProductDetail} />
        <Route exact path="/danh-sach" component={ProductList} />
        <Route path="/danh-sach/:slug.:id" component={ProductList} />
        <Route path="/ket-qua/:name" component={ProductSeachList} />
      </Switch>
      <Service />
      <Footer />
    </div>
  );
};

export default ShopRoute;
