import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ProductsHorizontalCardList from "./ProductsHorizontalCardList";
import ProductsCardList from "./ProductsCardList"
import Box from "@material-ui/core/Box";
import { PRIMARY_HOME_COLOR } from "../../../constants/index";
import Controller from "../../../utils/Controller";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const AntTabs = withStyles({
  root: {
    borderBottom: `1px solid lightgray`,
  },
  indicator: {
    backgroundColor: PRIMARY_HOME_COLOR,
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: PRIMARY_HOME_COLOR,
      opacity: 1,
    },
    "&$selected": {
      color: PRIMARY_HOME_COLOR,
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: PRIMARY_HOME_COLOR,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const ProductListOfBoxTag = (props) => {
  const [boxtagData, setBoxtagData] = useState();
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    if (props.boxtagData) {
      setBoxtagData(props.boxtagData)
    }
  }, [props.boxtagData])

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const fieldValidator = (value) => {
    if (value) {
      return value;
    } else {
      return ""
    }
  }

  return (
    <div className="product-list-of-boxtag bg-white mt-4 mb-4">
      <div className="product-list-of-boxtag-title">{boxtagData ? boxtagData.name : ""}</div>
      <AntTabs value={tabValue} onChange={handleChange} aria-label="ant example">
        {
          boxtagData ? boxtagData.tags.length && boxtagData.tags.map((value, index) => (
            <AntTab key={value._id} label={fieldValidator(value.name)} {...a11yProps(index)} />
          )) : <></>
        }
      </AntTabs>
      {
        boxtagData ? boxtagData.tags.length && boxtagData.tags.map((value, index) => (
          <TabPanel key={value._id} value={tabValue} index={index}>
            <div>
              {
                boxtagData.image.url ? (
                  <div className="row m-0 p-0">
                    <div className="col-5 d-none d-md-block">
                      <div className="product-list-of-boxtag-img-wrapper">
                        <img
                          alt=""
                          src={boxtagData.image.url}
                        ></img>
                      </div>
                    </div>
                    <div className="row m-0 p-0 col-lg-7 col-md-7 col-12">
                      <ProductsHorizontalCardList cateId={value.category}></ProductsHorizontalCardList>

                      <div className="see-more col-12 p-3 text-center">
                        <Link
                          className="category-item-title one-line-text"
                          to={
                            "/danh-sach/" +
                            Controller.formatURL(value.name) +
                            "." +
                            value.category
                          }
                        >
                          <Button
                            variant="outlined"
                            style={{
                              color: PRIMARY_HOME_COLOR,
                              border: `2px solid ${PRIMARY_HOME_COLOR}`,
                              paddingLeft: "50px",
                              paddingRight: "50px",
                              fontSize: "0.9rem",
                            }}
                          >
                            Xem thêm
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <ProductsCardList cateData={value}></ProductsCardList>
                )
              }

            </div>
          </TabPanel>
        )) : <></>
      }

    </div>
  );
};

export default ProductListOfBoxTag;
