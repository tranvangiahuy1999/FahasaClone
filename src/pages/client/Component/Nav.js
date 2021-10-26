import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = () => {
  const [valueProduct, setValueProduct] = useState();

  return (
    <nav className="nav">
      <div className="nav-container">
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
          <div className="nav-brand-wrapper col-3 pr-4">
            <div className="nav-brand-top-text mt-1">Nhà Sách</div>
            <div className="nav-brand-bot-text">Kiên Giang</div>
          </div>

          <div className="col-6 nav-search-container">
            <form className="form-inline mr-3">
              <div
                className="input-group nav-search-wrapper"
                style={{ width: "630px" }}
              >
                <input
                  type="text"
                  className="form-control nav-search-input"
                  aria-label="Small"
                  onChange={(e) => setValueProduct(e.target.value)}
                  value={valueProduct}
                  placeholder="Nhập sách cần tìm kiếm..."
                />
                <div className="input-group-append">
                  <div
                    className="search-btn"
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
              <AiOutlineShoppingCart
                size={30}
                color="orange"
              ></AiOutlineShoppingCart>
            </div>
            <div className="nav-cart-text right-wrapper">GIỎ HÀNG</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
