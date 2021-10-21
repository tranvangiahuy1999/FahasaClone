import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { HiViewList } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { FiBook, FiBookmark } from "react-icons/fi";
import { BiReceipt } from "react-icons/bi";
import { RiUserReceivedFill } from "react-icons/ri";

import Category from "./Category";
import Product from "./Product";
import ReceiptUndone from "./ReceiptUndone";
import ReceiptCancel from "./ReceiptCancel";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";
import TagManagement from "./Tag";
import BoxTagManager from "./BoxTag";
import BoxTagDetail from "./BoxTagDetail";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import {
  PRIMARY_COLOR,
  ICON_COLOR,
  TEXT_ON_PRIMARY,
  LOGO_COLOR,
} from "../../constants/index";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategoryData } from "../../reducers/AdminReducer";

import { userlogoutsuccess } from "../../reducers/UserReducer";
import adminApis from "../../apis/AdminApis";

const drawerWidth = 230;

const AdminIndex = (props) => {
  const { window } = props;
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    getCategoryList();
  }, []);

  const routes = [
    {
      path: "/admin/category",
      exact: true,
      main: () => <Category getCategoryList={getCategoryList}></Category>,
    },
    {
      path: "/admin/category/:id",
      main: () => <Category getCategoryList={getCategoryList}></Category>,
    },
    {
      path: "/admin/product",
      exact: true,
      main: () => <Product></Product>,
    },
    {
      path: "/admin/product/edit-product/:id",
      exact: true,
      main: () => <CreateProduct></CreateProduct>,
    },
    {
      path: "/admin/receipt",
      exact: true,
      main: () => <ReceiptUndone></ReceiptUndone>,
    },
    {
      path: "/admin/receipt/undone",
      main: () => <ReceiptUndone></ReceiptUndone>,
    },
    {
      path: "/admin/receipt/cancel",
      main: () => <ReceiptCancel></ReceiptCancel>,
    },
    {
      path: "/admin/product/add-product",
      main: () => <CreateProduct></CreateProduct>,
    },
    {
      path: "/admin/product/update-product/:id",
      main: () => <UpdateProduct></UpdateProduct>,
    },
    {
      path: "/admin/tag",
      main: () => <TagManagement></TagManagement>,
    },
    {
      path: "/admin/box-tag",
      exact: true,
      main: () => <BoxTagManager></BoxTagManager>,
    },
    {
      path: "/admin/box-tag/:id",
      main: () => <BoxTagDetail></BoxTagDetail>,
    },
  ];

  const drawer = (
    <div>
      <div className={styles.toolbar}></div>
      <List>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <BiReceipt style={style.drawnerItemIcon}></BiReceipt>
          </ListItemIcon>
          <ListItemText style={style.drawnerItem} primary="Đơn hàng" />
          <IconButton>
            <IoIosArrowDown style={style.arrowIcon} />
          </IconButton>
        </ListItem>

        <Collapse in={true} timeout="auto">
          <List component="div" disablePadding>
            <ListItem
              button
              style={style.nested}
              component={NavLink}
              to="/admin/receipt/undone"
            >
              <ListItemText
                primary="Chờ xử lý"
                classes={{ primary: styles.listItemText }}
              />
            </ListItem>
            <ListItem
              button
              style={style.nested}
              component={NavLink}
              to="/admin/receipt/cancel"
            >
              <ListItemText
                primary="Đã xử lý"
                classes={{ primary: styles.listItemText }}
              />
            </ListItem>
          </List>
        </Collapse>

        <ListItem>
          <ListItemIcon>
            <FiBookmark style={style.drawnerItemIcon}></FiBookmark>
          </ListItemIcon>
          <ListItemText style={style.drawnerItem} primary="Danh mục" />
          <IconButton>
            <IoIosArrowDown style={style.arrowIcon} />
          </IconButton>
        </ListItem>

        <Collapse in={true} timeout="auto">
          <List component="div" disablePadding>
            <ListItem
              button
              style={style.nested}
              component={NavLink}
              to="/admin/category"
            >
              <ListItemText
                primary="Danh mục"
                classes={{ primary: styles.listItemText }}
              />
            </ListItem>
            <ListItem
              component={NavLink}
              to="/admin/box-tag"
              activeClassName="Mui-selected"
              button
              style={style.nested}
            >
              <ListItemText
                primary="Box tag"
                classes={{ primary: styles.listItemText }}
              />
            </ListItem>
            <ListItem
              component={NavLink}
              to="/admin/tag"
              activeClassName="Mui-selected"
              button
              style={style.nested}
            >
              <ListItemText
                primary="Tag"
                classes={{ primary: styles.listItemText }}
              />
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          button
          component={NavLink}
          to="/admin/product"
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <FiBook style={style.drawnerItemIcon}></FiBook>
          </ListItemIcon>
          <ListItemText style={style.drawnerItem} primary="Sản phẩm" />
        </ListItem>
      </List>
    </div>
  );

  const getCategoryList = async () => {
    try {
      const res = await adminApis.getCategory();
      if (res.status === 200) {
        await dispatch(setCategoryData(res.data));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(userlogoutsuccess());
    // return history.push("/login");
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
      <div className={styles.root}>
        <CssBaseline />
        <AppBar position="fixed" elevation={0} className={styles.appBar}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={styles.menuButton}
            >
              <HiViewList color={ICON_COLOR}></HiViewList>
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              style={{
                color: LOGO_COLOR,
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Trang quản lý
            </Typography>
            <div className="admin-toolbar-setting">
              <div className="link-text" onClick={handleLogout}>
                <RiUserReceivedFill
                  color={ICON_COLOR}
                  size="20px"
                ></RiUserReceivedFill>{" "}
                <span
                  style={{
                    color: ICON_COLOR,
                    size: "2rem",
                    fontWeight: "bold",
                  }}
                >
                  Đăng xuất
                </span>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={styles.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              classes={{ paper: styles.drawerPaper }}
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{ paper: styles.drawerPaper }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={styles.content}>
          <Toolbar />
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                children={<route.main />}
              />
            ))}
          </Switch>
        </main>
      </div>
    </Router>
  );
};

const style = {
  drawnerItem: {
    color: TEXT_ON_PRIMARY,
    marginTop: "4px",
    marginBottom: "4px",
  },
  arrowIcon: {
    color: TEXT_ON_PRIMARY,
    fontSize: "1rem",
  },
  drawnerItemIcon: {
    fontSize: "1.4rem",
    color: ICON_COLOR,
  },
  nested: {
    paddingLeft: "72px",
    color: TEXT_ON_PRIMARY,
  },
  nestedIcon: {
    fontSize: "0.9rem",
    color: ICON_COLOR,
  },
  navLinkStyle: {
    textDecoration: "none",
  },
  sidebarHeaderTitle: {
    color: ICON_COLOR,
    textAlign: "center",
  },
  sidebarHeader: {
    color: "#2e849e",
    textAlign: "center",
    fontSize: "0.9rem",
  },
};

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    background: PRIMARY_COLOR,
    width: drawerWidth,
  },
  drawerToolbar: {
    backgroundColor: PRIMARY_COLOR,
  },
  listItemText: {
    fontSize: "0.9rem",
  },
  content: {
    flexGrow: 1,
    minWidth: "1100px",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: "white",
  },
}));

AdminIndex.propTypes = {
  window: PropTypes.func,
};

export default AdminIndex;
