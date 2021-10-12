import React, { useState } from "react";
import Input from "@material-ui/core/Input";
const Nav = () => {
  const [valueProduct, setValueProduct] = useState();

  const inputChange = (e) => {
    // prepare value
    let {
      target: { name: fieldName, value },
    } = e;
    setValueProduct(value);
    console.log("value", value);
  };

  return (
    <nav className="navbar navbar-expand-md bg-white navbar-light">
      <div className="container" style={{ paddingBottom: "0px" }}>
        <div
          class="navbar-logo"
          style={{
            width: "60px",
            height: "60",
            marginLeft: "30px",
            paddingTop: "0px",
            marginBottom: "0px",
          }}
        >
          <img
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
            src="https://res.cloudinary.com/hanh/image/upload/v1634066828/products/cge2hp4d7bctkrtw1rdj.png"
            alt=""
          />
        </div>
        <a
          className="navbar-brand"
          href="/"
          style={{ color: "#64ae55", marginLeft: "20px" }}
        >
          <b>Nhà Sách KG</b>
        </a>
        {/* navbar-toggler  */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          {/* form tìm kiếm  */}
          <form
            className="form-inline ml-auto my-2 my-lg-0 mr-3"
            style={{ paddingLeft: "10%", paddingRight: "0px" }}
          >
            <div className="input-group" style={{ width: "700px" }}>
              <Input
                type="text"
                name="name"
                className="form-control"
                aria-label="Small"
                placeholder="Nhập sách cần tìm kiếm..."
                onChange={inputChange}
                value={valueProduct}
              />
              <div className="input-group-append">
                <a
                  type="button"
                  className="btn"
                  href={"/ket-qua/" + valueProduct}
                  style={{ backgroundColor: "#64ae55", color: "white" }}
                >
                  <i className="fa fa-search" />
                </a>
                {/* <ProductSearchList value={valueProduct}></ProductSearchList> */}
              </div>
            </div>
          </form>
          <div
            class="navbar-nav"
            style={{
              width: "100px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "0px",
              padding: "8px 3% 0px 0px",
            }}
          >
            <div
              class="nav--shopping-cart"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                margin: "0px",
              }}
            >
              <div
                class="shopping-cart--icon"
                style={{ flex: 1, marginRight: "20px", color: "#ee6c4d" }}
              >
                <i className="fa fa-shopping-cart" />
              </div>

              <div
                class="shopping-cart--content"
                style={{ flex: 1, fontWeight: "500", color: "#ee6c4d" }}
              >
                Giỏ hàng
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
