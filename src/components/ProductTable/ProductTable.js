import React from "react";
import ProductFeild from "../ProductFeild/ProductFeild";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductTable.module.css";

const ProductTable = ({ items, removeFunction }) => {
  console.log(items);
  return (
    <div className={classes.product__table__container}>
      <div className={classes.table__title}>
        <h4>Product</h4>
        <h4>By</h4>
        <h4>Price</h4>
        <h4> </h4>
      </div>
      <div className={classes.product__listing__container}>
        <div className={classes.product__list}>
          {items.map((item) => (
            <ProductItem
              image={item.image}
              name={item.name}
              price={item.price}
              supplierName={"Phurba Tamang"}
              description={item.description}
              edition={"18/20"}
              removeItem={() => removeFunction(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
