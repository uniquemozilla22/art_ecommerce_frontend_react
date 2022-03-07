import { Category } from "@mui/icons-material";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { animated, useSpring } from "react-spring";
import classes from "./ProductFilter.module.css";
import FeatherIcon from "feather-icons-react";
import { Accordion, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Slider } from "@mui/material";
import { useDispatch } from "react-redux";
import FilterByPrice from "../../store/actions/products/filterbyprice.update";
import { CATEGORY } from "../../store/actions/Types/Types";

const ProductFilter = ({ data }) => {
  const dispatch = useDispatch();
  const categoryData = (datas) => {
    return datas
      ?.map((product) => product.category)
      .reduce((acc, current) => {
        const x = acc.find((item) => item.id === current.id);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
  };

  const getPriceRange = () => {
    let price_range = data?.map((product) => product.data.unit_price).sort();

    return [price_range[0], price_range[price_range.length - 1]];
  };

  const [category, setCategory] = useState(categoryData(data));
  const [highAndLow, sethighAndLow] = useState(getPriceRange());
  const [value, setValue] = useState(highAndLow);

  const handleChangeSlider = (value) => {
    // dispatch(FilterByPrice({ range: value, type: CATEGORY }));
    setValue(value);
  };

  return (
    <div className={classes.product__filter__container}>
      <div className={classes.filtering__section}>
        <ul className={classes.filterList}>
          <Link to={"/products"}>
            <FeatherIcon icon="list" /> <span>Products</span>
          </Link>
          <Link to={"/artists"}>
            <FeatherIcon icon="users" /> <span>Auctions</span>
          </Link>
        </ul>
        <Accordion
          defaultActiveKey="0"
          className={classes.accordion__container}
        >
          {category ? (
            <Accordion.Item eventKey="0">
              <Accordion.Header className={classes.accordion__container_header}>
                Category
              </Accordion.Header>
              <Accordion.Body className={classes.accordion__body}>
                <ul className={classes.categoryDropdown}>
                  {Object.keys(category).map((keys, value) => {
                    return (
                      <animated.li key={value}>
                        <Link
                          to={`/category/${category[value].id}`}
                          className="w-100"
                        >
                          {category[value].name}
                        </Link>
                      </animated.li>
                    );
                  })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          ) : null}
        </Accordion>
        <Accordion
          defaultActiveKey="0"
          className={classes.accordion__container}
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header className={classes.accordion__container_header}>
              Price
            </Accordion.Header>
            <Accordion.Body className={classes.accordion__body}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                min={0}
                max={highAndLow[1]}
                onChange={(e, value) => handleChangeSlider(value)}
                valueLabelDisplay="auto"
                getAriaValueText={(value) => {
                  return `NRS. ${value}`;
                }}
                className={classes.product__slider}
                style={slider__style}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

const slider__style = {
  color: "#676FA3",
  height: 2,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#000",
    border: "1px solid #000000",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "#000000",
      color: "#000000",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
    color: "#000000",
  },
  "& .MuiSlider-rail": {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
  },
};
export default ProductFilter;
