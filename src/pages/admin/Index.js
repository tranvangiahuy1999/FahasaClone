import React, { useState } from "react";
import PropTypes from "prop-types";
import Hidden from "@material-ui/core/Hidden";
import { Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { HiViewList } from "react-icons/hi";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowBack } from "react-icons/io";
import { IoFileTrayStackedSharp } from "react-icons/io5";
import { FiBook, FiBookmark } from "react-icons/fi";
import { BiReceipt } from "react-icons/bi";
import { RiZzzLine, RiUserReceivedFill } from "react-icons/ri";
import {
  AiOutlineFileDone,
  AiOutlineFileSync,
  AiOutlineSetting,
  AiOutlineTag,
} from "react-icons/ai";

import Category from "./Category";
import Product from "./Product";
import Receipt from "./Receipt";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import {
  PRIMARY_COLOR,
  ICON_COLOR,
  TEXT_ON_PRIMARY,
  LOGO_COLOR,
} from "../../constants/index";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userlogoutsuccess } from "../../reducers/UserReducer";

const drawerWidth = 240;

const AdminIndex = (props) => {
  const { window } = props;
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCateNest, setOpenCateNest] = useState(false);
  const [openReceiptNest, setOpenReceiptNest] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const routes = [
    {
      path: "/admin/category",
      main: () => <Category></Category>,
    },
    {
      path: "/admin/product",
      main: () => <Product></Product>,
    },
    {
      path: "/admin/receipt",
      main: () => <Receipt></Receipt>,
    },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <div style={{ width: "100%" }}>
          <Avatar
            icon={<FaUserCircle />}
            style={{ margin: "auto", marginTop: "16px", marginBottom: "10px" }}
          />
          <h5 style={style.sidebarHeaderTitle}>Xin chào</h5>
          <Link to="/admin/receipt" style={{ textDecoration: "none" }}>
            <div className="custom-link" style={style.sidebarHeader}>
              Bạn có 6 đơn hàng mới{" "}
              <span>
                <FaBell color="#ffff33"></FaBell>
              </span>
            </div>
          </Link>
        </div>
      </Toolbar>
      <List>
        <Divider />
        <ListItem
          button
          to="/admin/receipt"
          component={NavLink}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <BiReceipt style={style.drawnerItemIcon}></BiReceipt>
          </ListItemIcon>
          <ListItemText style={style.drawnerItem} primary="Đơn hàng" />
          <IconButton onClick={() => handleOpenNested("r")}>
            {openReceiptNest ? (
              <IoIosArrowUp style={style.arrowIcon} />
            ) : (
              <IoIosArrowBack style={style.arrowIcon} />
            )}
          </IconButton>
        </ListItem>

        <Collapse in={openReceiptNest} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button style={style.nested}>
              <ListItemIcon>
                <RiZzzLine style={style.nestedIcon}></RiZzzLine>
              </ListItemIcon>
              <ListItemText primary="Chờ xử lý" />
            </ListItem>
            <ListItem button style={style.nested}>
              <ListItemIcon>
                <AiOutlineFileSync style={style.nestedIcon}></AiOutlineFileSync>
              </ListItemIcon>
              <ListItemText primary="Đang xử lý" />
            </ListItem>
            <ListItem button style={style.nested}>
              <ListItemIcon>
                <AiOutlineFileDone style={style.nestedIcon}></AiOutlineFileDone>
              </ListItemIcon>
              <ListItemText primary="Đã xử lý" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          button
          component={NavLink}
          to="/admin/category"
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <FiBookmark style={style.drawnerItemIcon}></FiBookmark>
          </ListItemIcon>
          <ListItemText style={style.drawnerItem} primary="Danh mục" />
          <IconButton onClick={() => handleOpenNested("d")}>
            {openCateNest ? (
              <IoIosArrowUp style={style.arrowIcon} />
            ) : (
              <IoIosArrowBack style={style.arrowIcon} />
            )}
          </IconButton>
        </ListItem>

        <Collapse in={openCateNest} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button style={style.nested}>
              <ListItemIcon>
                <IoFileTrayStackedSharp
                  style={style.nestedIcon}
                ></IoFileTrayStackedSharp>
              </ListItemIcon>
              <ListItemText primary="Quản lý danh mục" />
            </ListItem>
            <ListItem button style={style.nested}>
              <ListItemIcon>
                <AiOutlineTag style={style.nestedIcon}></AiOutlineTag>
              </ListItemIcon>
              <ListItemText primary="Quản lý tag" />
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenNested = (tag) => {
    if (tag === "d") {
      setOpenCateNest(!openCateNest);
    } else {
      setOpenReceiptNest(!openReceiptNest);
    }
  };

  const handleClickSettingMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(userlogoutsuccess());
    setAnchorEl(null);
    // return history.push("/login");
  };

  const handleCloseSettingMenu = () => {
    setAnchorEl(null);
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
              sx={{ mr: 2, display: { sm: "none" } }}
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
              <IconButton onClick={handleClickSettingMenu}>
                <AiOutlineSetting
                  size="26px"
                  color={ICON_COLOR}
                ></AiOutlineSetting>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseSettingMenu}
              >
                <MenuItem onClick={handleLogout}>
                  <div>
                    <RiUserReceivedFill
                      color={ICON_COLOR}
                      size="18px"
                    ></RiUserReceivedFill>{" "}
                    <span>Đăng xuất</span>
                  </div>
                </MenuItem>
              </Menu>
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
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{ paper: styles.drawerPaper }}
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
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
                path={route.path}
                exact={route.exact}
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
    paddingLeft: "30px",
    color: TEXT_ON_PRIMARY,
  },
  nestedIcon: {
    fontSize: "1.2rem",
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
  },
  drawerToolbar: {
    backgroundColor: PRIMARY_COLOR,
  },
  listItemText: {
    fontSize: "1.4rem", //Insert your required size
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  root: {
    display: "flex",
  },
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
