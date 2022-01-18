import React from "react";
import classes from "./Categories.module.css";
import CategoryList from "./CategoryList";

const Categories = ({ data }) => {
  console.log(data);
  return (
    <div className={classes.categories__container}>
      <div className={"container-fluid " + classes.category__lists}>
        {data.map((category) => (
          <CategoryList {...category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
