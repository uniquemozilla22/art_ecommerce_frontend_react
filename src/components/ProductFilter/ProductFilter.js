import React, { useEffect, useState } from "react";
import { animated } from "react-spring";
import classes from "./ProductFilter.module.css";
import FeatherIcon from "feather-icons-react";
import { Accordion } from "react-bootstrap";
import { Link, useParams, useLocation, NavLink } from "react-router-dom";
import { Slider } from "@mui/material";
import { useDispatch } from "react-redux";

import FetchCategories from "../../store/actions/FetchData/Categories.fetch";

const ProductFilter = ({ data, filterProductbyPrice }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const categories = await dispatch(FetchCategories());
    setCategory(categories);
  };

  const getPriceRange = () => {
    let price_range = data?.map((product) => product.data.unit_price).sort();

    return [price_range[0], price_range[price_range.length - 1]];
  };

  const [highAndLow, sethighAndLow] = useState(getPriceRange());
  const [value, setValue] = useState(highAndLow);

  const handleChangeSlider = (value) => {
    filterProductbyPrice(value);
    setValue(value);
  };

  return (
    <div className={classes.product__filter__container}>
      <div className={classes.filtering__section}>
        <ul className={classes.filterList}>
          <NavLink
            to={"/products"}
            className={({ isActive }) => (isActive ? classes.active__link : "")}
          >
            <FeatherIcon icon="list" /> <span>Products</span>
          </NavLink>
          <NavLink to={"/artists"}>
            <FeatherIcon icon="users" /> <span>Auctions</span>
          </NavLink>
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
                      <animated.li
                        key={value}
                        className={
                          id && category[value].id == id
                            ? classes.active__link
                            : ""
                        }
                      >
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
