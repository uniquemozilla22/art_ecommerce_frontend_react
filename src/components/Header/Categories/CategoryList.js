import React from "react";
import { Link } from "react-router-dom";
import classes from "./Categories.module.css";
import { KeyboardArrowDownOutlined } from "@mui/icons-material/";

const CategoryList = ({ name, id, subCategory }) => {
  if (subCategory) {
    return (
      <div className={classes.category__list}>
        <Link to={`products/${id}`}>
          {name}
          <KeyboardArrowDownOutlined />
        </Link>
      </div>
    );
  } else {
    return (
      <div className={classes.category__list}>
        <Link to={`products/${id}`}>{name}</Link>
      </div>
    );
  }
};

export default CategoryList;
