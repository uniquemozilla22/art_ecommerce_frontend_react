import { Category } from "@mui/icons-material";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { animated, useSpring } from "react-spring";
import classes from "./ProductFilter.module.css";
import FeatherIcon from "feather-icons-react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Slider } from "@mui/material";

const ProductFilter = () => {
  const [value, setValue] = useState([2000, 3000]);

  const useAnimationStyle = (delay) => {
    return useSpring({
      loop: false,
      from: { x: 50, opacity: 0 },
      to: { x: 0, opacity: 1 },
      delay: delay * 100,
    });
  };
  return (
    <div className={classes.product__filter__container}>
      <div className={classes.filtering__section}>
        <ul className={classes.filterList}>
          <animated.li style={useAnimationStyle(1)}>
            <FeatherIcon icon="eye" /> <span>View All</span>
          </animated.li>
          <animated.li style={useAnimationStyle(2)}>
            <FeatherIcon icon="list" /> <span>Products</span>
          </animated.li>
          <animated.li style={useAnimationStyle(3)}>
            <FeatherIcon icon="users" /> <span>Artist</span>
          </animated.li>
        </ul>
        <Accordion
          defaultActiveKey="0"
          className={classes.accordion__container}
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header className={classes.accordion__container_header}>
              Category
            </Accordion.Header>
            <Accordion.Body className={classes.accordion__body}>
              <ul className={classes.categoryDropdown}>
                <animated.li style={useAnimationStyle(1)}>
                  <Link to="/dashboard" className="w-100">
                    Category 1
                  </Link>
                </animated.li>
                <animated.li style={useAnimationStyle(2)}>
                  <Link to="/dashboard" className="w-100">
                    Category 2
                  </Link>
                </animated.li>
                <animated.li style={useAnimationStyle(3)}>
                  <Link to="/dashboard" className="w-100">
                    Category 3
                  </Link>
                </animated.li>
                <animated.li style={useAnimationStyle(4)}>
                  <Link to="/dashboard" className="w-100">
                    Category 4
                  </Link>
                </animated.li>
                <animated.li style={useAnimationStyle(5)}>
                  <Link to="/dashboard" className="w-100">
                    Category 5
                  </Link>
                </animated.li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
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
                min={1000}
                max={5000}
                onChange={(e, value) => setValue(value)}
                valueLabelDisplay="auto"
                getAriaValueText={(value) => `NRS. ${value}`}
                className={classes.product__slider}
                style={slider__style}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion
          defaultActiveKey="0"
          className={classes.accordion__container}
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header className={classes.accordion__container_header}>
              Tags
            </Accordion.Header>
            <Accordion.Body className={classes.accordion__body}>
              <ul className={classes.tagsList}>
                <li>Tag 1</li>
                <li>Tag 2</li>
                <li>Tag 3</li>
                <li>Tag 4</li>
                <li>Tag 5</li>
                <li>Tag 6</li>
              </ul>
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
