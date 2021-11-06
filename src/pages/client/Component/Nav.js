import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import clsx from "clsx";

import { BsListNested } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";

import Controller from "../../../utils/Controller";

const Nav = () => {
  const classes = useStyles();
  const history = useHistory();
  const categoryData = useSelector((state) => state.shop.categoryData);
  const [cateList, setCateList] = useState([]);
  const [valueProduct, setValueProduct] = useState();
  const [drawnerState, setDrawnerState] = useState(false);

  useEffect(() => {
    setCateList([...categoryData]);
  }, [categoryData]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!valueProduct) return;
    history.push("/ket-qua/" + valueProduct);
  };

  const toggleDrawer = (open) => {
    setDrawnerState(open);
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <h5 className="pl-3">Danh mục</h5>
      <List>
        {cateList.length ? (
          cateList.map((ele, index) => (
            <Link
              className="drawner-link-color"
              to={
                "/danh-sach/" + Controller.formatURL(ele.name) + "." + ele._id
              }
            >
              <ListItem button key={index}>
                <ListItemText primary={ele.name} />
              </ListItem>
            </Link>
          ))
        ) : (
          <div className="empty-data-text">Hiện tại chưa có danh mục</div>
        )}
      </List>
    </div>
  );

  return (
    <nav className="nav bg-white">
      <Drawer
        anchor="left"
        open={drawnerState}
        onClose={() => toggleDrawer(false)}
      >
        {list()}
      </Drawer>
      <div className="nav-container d-none d-md-block">
        <div className="row m-0 p-0">
          <div className="col-1">
            <div className="nav-logo-wrapper">
              <Link to="/">
                <img
                  className="nav-logo"
                  src="https://res.cloudinary.com/hanh/image/upload/v1634066828/products/cge2hp4d7bctkrtw1rdj.png"
                  alt=""
                />
              </Link>
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
            <div className="right-wrapper mr-4 mt-2">
              <Link to="/gio-hang">
                <IconButton color="secondary">
                  <AiOutlineShoppingCart
                    size={30}
                    color="orange"
                  ></AiOutlineShoppingCart>
                  <div className="nav-cart-text right-wrapper ml-2">
                    GIỎ HÀNG
                  </div>
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-nav-container d-md-none">
        <div className="mobile-nav-title">Nhà Sách Kiên Giang</div>
        <div className="row m-0 p-0">
          <div className="col-2">
            <IconButton color="primary" onClick={() => toggleDrawer(true)}>
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
            <Link to="/gio-hang">
              <IconButton color="secondary">
                <AiOutlineShoppingCart
                  size={28}
                  color="white"
                ></AiOutlineShoppingCart>
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const useStyles = makeStyles({
  list: {
    width: 250,
    paddingTop: 20,
  },
});

export default Nav;
