import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import ProductsHorizontalCardList from "./ProductsHorizontalCardList";
import ProductsCardList from "./ProductsCardList"
import Box from "@material-ui/core/Box";
import { PRIMARY_HOME_COLOR } from "../../../constants/index";
import { convertURL } from "../../../utils/format-string.util";
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

const ProductListOfBoxTag = (props) => {
  const [boxtagData, setBoxtagData] = useState();
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    if (props.boxtagData) {
      setBoxtagData(props.boxtagData)
    }
  }, [props.boxtagData])

  const handleChange = (newValue) => {
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
      <div className="boxtag-tabs">
      <ul>
      {
          boxtagData && boxtagData.tags.length && boxtagData.tags.map((value, index) => (
            <li key={value._id} onClick={() => handleChange(index)}>
              <span className={tabValue === index ? "active" : ""}>{value.name}</span>
            </li>            
          ))
        }      
      </ul>
      </div>      
      {
        boxtagData ? boxtagData.tags.length && boxtagData.tags.map((value, index) => (
          <TabPanel key={value._id} value={tabValue} index={index}>
            <div>
              {
                boxtagData.image.url ? (
                  <div className="row mx-0">
                    <div className="col-lg-5 col-md-5 col-12">
                      <div className="product-list-of-boxtag-img-wrapper">
                        <img
                          alt=""
                          src={boxtagData.image.url}
                        ></img>
                      </div>
                    </div>
                    <div className="row m-0 col-lg-7 col-md-7 col-12">
                      <ProductsHorizontalCardList tagId={value._id}></ProductsHorizontalCardList>

                      <div className="see-more col-12 p-3 text-center">
                        <Link
                          to={
                            "/danh-sach/" +
                            convertURL(value.name) +
                            "." +
                            value.category
                          }
                        >
                          <Button
                            variant="outlined"
                            style={{
                              color: PRIMARY_HOME_COLOR,
                              border: `2px solid ${PRIMARY_HOME_COLOR}`,
                              paddingLeft: "40px",
                              paddingRight: "40px",
                              fontSize: "0.8rem",
                            }}
                          >
                            Xem thêm
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <ProductsCardList tagId={value._id} cateData={value}></ProductsCardList>
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
