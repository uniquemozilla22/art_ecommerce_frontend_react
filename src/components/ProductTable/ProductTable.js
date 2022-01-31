import React, { useState } from "react";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductTable.module.css";

const ProductTable = ({ items, removeFunction }) => {
  const [coupon] = useState(1400);
  let total = 0;
  console.log(items);
  return (
    <div className={classes.product__table__container}>
      <div className={classes.table__title}>
        <h4>Product</h4>
        <h4 className={"d-none d-sm-block"}>By</h4>
        <h4>Price</h4>
        <h4> </h4>
      </div>
      <div className={classes.product__listing__container}>
        <div className={classes.product__list}>
          {items.map((item) => {
            total = total + item.price;
            return (
              <ProductItem
                image={item.image}
                name={item.name}
                price={item.price}
                supplierName={"Phurba Tamang"}
                description={item.description}
                edition={"18/20"}
                removeItem={() => removeFunction(item.id)}
              />
            );
          })}
        </div>
      </div>
      <div className={classes.calculations}>
        <div className={classes.totals}>
          <h4>
            Sub Total<span> {total}</span>{" "}
          </h4>
          <h4>
            Coupon <span>{coupon} </span>
          </h4>
          <hr />
          <h4>
            Grand Total <span>{total - coupon}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
