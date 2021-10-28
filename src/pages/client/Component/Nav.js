import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import IconButton from "@material-ui/core/IconButton";
import { BsListNested } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const history = useHistory();
  const [valueProduct, setValueProduct] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!valueProduct) return;
    history.push("/ket-qua/" + valueProduct);
  };

  return (
    <nav className="nav bg-white">
      <div className="nav-container d-none d-md-block">
        <div className="row m-0 p-0">
          <div className="col-1">
            <div className="nav-logo-wrapper">
              <img
                className="nav-logo"
                src="https://res.cloudinary.com/hanh/image/upload/v1634066828/products/cge2hp4d7bctkrtw1rdj.png"
                alt=""
              />
            </div>
          </div>
          <div className="nav-brand-wrapper col-3 pr-2">
            <div className="nav-brand-top-text mt-1">Nhà Sách</div>
            <div className="nav-brand-bot-text">Kiên Giang</div>
          </div>

          <div className="col-6 nav-search-container">
            <form className="form-inline mr-3" onSubmit={onSubmit}>
              <div
                className="input-group nav-search-wrapper"
                style={{ width: "630px" }}
              >
                <input
                  type="text"
                  className="form-control nav-search-input"
                  onChange={(e) => setValueProduct(e.target.value)}
                  value={valueProduct}
                  placeholder="Nhập sách cần tìm kiếm..."
                />
                <div className="input-group-append" onClick={onSubmit}>
                  <div
                    className="search-btn"
                    onClick={onSubmit}
                    style={{ backgroundColor: "#64ae55", color: "white" }}
                  >
                    <i className="fa fa-search " />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="nav-cart col-2 text-center">
            <div className="right-wrapper mr-4 mt-3">
              <IconButton color="secondary">
                <AiOutlineShoppingCart
                  size={30}
                  color="orange"
                ></AiOutlineShoppingCart>
                <div className="nav-cart-text right-wrapper ml-2">GIỎ HÀNG</div>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-nav-container d-md-none">
        <div className="mobile-nav-title">Nhà Sách Kiên Giang</div>
        <div className="row m-0 p-0">
          <div className="col-2">
            <IconButton color="primary">
              <BsListNested size={28} color="white"></BsListNested>
            </IconButton>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="form-control mobile-nav-search-input"
              onChange={(e) => setValueProduct(e.target.value)}
              value={valueProduct}
              placeholder="Nhập sách cần tìm kiếm..."
            ></input>
          </div>
          <div className="col-2 right-wrapper">
            <IconButton color="secondary">
              <AiOutlineShoppingCart
                size={28}
                color="white"
              ></AiOutlineShoppingCart>
            </IconButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
