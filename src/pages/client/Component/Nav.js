import { useHistory, Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import shopApis from "../../../apis/ShopApis";
import clsx from "clsx";
import "../../../styles/style.css";
import { BsListNested } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Badge from '@material-ui/core/Badge';
import logoImg from '../../../assets/image/logo-img.png'
import CategorySideBar from "./SideBar/CategorySideBar";

const Nav = (props) => {
  const badgeNumber = props.badgeNumber;
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();
  const [categoryList, setCategoryList] = useState([]);
  const [productId1, setProductId1] = useState();
  const [productId2, setProductId2] = useState();
  const [valueProduct, setValueProduct] = useState();
  const [drawnerState, setDrawnerState] = useState(false);
  const [numItem, setNumItem] = useState(0);

  useEffect(() => {
    getCategoryData()
  }, []);

  useEffect(() => {
    setNumItem(getNumItem());
  },[badgeNumber]);

  const getCategoryData = async () => {
    try {
      const res = await shopApis.getCategoryList();
      if (res.status === 200) {
        res.data.map((value, index) => {
          value.subCate.map((value1, index) => {
            if (value1._id === params.id) {
              setProductId1(value1.parent_cate);
            } else if (value1.subCate && value1.subCate.length > 0) {
              value1.subCate.map(value2 => {
                if (value2._id === params.id) {
                  setProductId1(value1.parent_cate);
                  setProductId2(value2.parent_cate);
                }
              })
            }
          });
        });
        setCategoryList(res.data);
      }
    } catch (e) {
    }
  };

  const getNumItem = () => {
    const temp = JSON.parse(localStorage.getItem("Cart"));
    if (temp)
      return temp.length;
    else
      return 0;
  }

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
    >
      <h5 className="pl-3">Danh mục</h5>
      <CategorySideBar listdata={categoryList} parentidlevel1={productId1} parentidlevel2={productId2} currentId={params.id} />
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
                  src={logoImg}
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
                  <IconButton aria-label="cart">
                    <Badge badgeContent={numItem} color="secondary">
                      <AiOutlineShoppingCart
                        size={30}
                        color="orange"
                      ></AiOutlineShoppingCart>
                    </Badge>
                  </IconButton>

                  {/* <div className="nav-cart-text right-wrapper ml-2">
                    GIỎ HÀNG
                  </div> */}
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-nav-container d-md-none">
        <Link to="/"><div className="mobile-nav-title">Nhà Sách Kiên Giang</div></Link>
        <div className="row m-0 p-0">
          <div className="col-2">
            <IconButton color="primary" onClick={() => toggleDrawer(true)}>
              <BsListNested size={28} color="white"></BsListNested>
            </IconButton>
          </div>
          <form className="col-8" onSubmit={onSubmit}>
            <input
              type="text"
              className="form-control mobile-nav-search-input"
              onChange={(e) => setValueProduct(e.target.value)}
              value={valueProduct}
              placeholder="Nhập sách cần tìm kiếm..."
            ></input>
          </form>
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
