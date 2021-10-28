import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HorizontalProductCard from "./HorizontalProductCard";
import Box from "@material-ui/core/Box";
import { PRIMARY_HOME_COLOR } from "../../../constants/index";

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
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="product-list-of-boxtag bg-white mt-4 mb-4">
      <div className="product-list-of-boxtag-title">Kinh tế</div>
      <AntTabs value={value} onChange={handleChange} aria-label="ant example">
        <AntTab label="Giảm sốc" {...a11yProps(0)} />
        <AntTab label="Sắp phát hành" {...a11yProps(0)} />
        <AntTab label="Bán chạy" {...a11yProps(0)} />
      </AntTabs>
      <TabPanel value={value} index={0}>
        <div className="row m-0 p-0">
          <div className="col-5">
            <div className="product-list-of-boxtag-img-wrapper">
              <img
                alt=""
                src="https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_180164_2_411.jpg"
              ></img>
            </div>
          </div>
          <div className="row m-0 p-0 col-7">
            <div className="col-6">
              <HorizontalProductCard
                img={
                  "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_196417.jpg"
                }
                productName={"Where To Play"}
                productPrice={100000}
              ></HorizontalProductCard>
            </div>
            <div className="col-6">
              <HorizontalProductCard
                img={
                  "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_196417.jpg"
                }
                productName={"Where To Play"}
                productPrice={100000}
              ></HorizontalProductCard>
            </div>
            <div className="col-6">
              <HorizontalProductCard
                img={
                  "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_196417.jpg"
                }
                productName={"Where To Play"}
                productPrice={100000}
              ></HorizontalProductCard>
            </div>
            <div className="col-6">
              <HorizontalProductCard
                img={
                  "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_196417.jpg"
                }
                productName={"Where To Play"}
                productPrice={100000}
              ></HorizontalProductCard>
            </div>
          </div>
        </div>
      </TabPanel>
    </div>
  );
};

export default ProductListOfBoxTag;
