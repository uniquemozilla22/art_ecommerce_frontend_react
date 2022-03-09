import React, { useState } from "react";
import DataNotFound from "../DataNotFound/DataNotFound";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductTable.module.css";

const ProductTable = ({ items, removeFunction, wishlist, refresh }) => {
  const [coupon] = useState(1400);
  let total = 0;
  return (
    <div className={"container " + classes.product__table__container}>
      <h1 className={classes.pagetitle}>{wishlist ? "Wishlist" : "Cart"}.</h1>
      {items.length != 0 ? (
        <>
          <div className={classes.table__title}>
            <h4>Product</h4>
            <h4 className={"d-none d-sm-block"}>By</h4>
            <h4>Price</h4>
            <h4> </h4>
          </div>
          <div className={classes.product__listing__container}>
            <div className={classes.product__list}>
              {items.map((item) => {
                total = total + item.data.unit_price;
                return (
                  <ProductItem
                    key={item.data.id}
                    id={item.data.id}
                    image={item.data.image_url}
                    name={item.data.name}
                    price={item.data.unit_price}
                    supplierName={
                      item.supplierInfo.first_name +
                      " " +
                      item.supplierInfo.last_name
                    }
                    description={item.data.description}
                    removeItem={removeFunction}
                    wishlist={wishlist}
                    time={item?.auction?.expiration_date || null}
                  />
                );
              })}
            </div>
          </div>
          {!wishlist ? (
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
          ) : null}
        </>
      ) : (
        <DataNotFound
          action={() => refresh()}
          content="Try adding some products to wishlist"
        />
      )}
    </div>
  );
};

export default ProductTable;
