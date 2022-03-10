import React, { useEffect, useState } from "react";
import DataNotFound from "../DataNotFound/DataNotFound";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductTable.module.css";

const ProductTable = (props) => {
  const [coupon] = useState(1400);
  let total = 0;

  const [data, setData] = useState(props.items);

  useEffect(() => {
    setData(props.items);
    console.log(props.items);
  }, [props.items]);

  const dataPrinting = (data) => {
    return data?.map((item, index) => {
      return (
        <ProductItem
          key={index}
          id={item.data.id}
          image={item.data.image_url}
          name={item.data.name}
          price={item.data.unit_price}
          supplierName={
            item.supplierInfo.first_name + " " + item.supplierInfo.last_name
          }
          description={item.data.description}
          removeItem={props.removeFunction}
          wishlist={props.wishlist}
          time={item?.auction?.expiration_date || null}
        />
      );
    });
  };
  return (
    <div className={"container " + classes.product__table__container}>
      <h1 className={classes.pagetitle}>
        {props.wishlist ? "Wishlist" : "Cart"}.
      </h1>
      {data.length !== 0 ? (
        <>
          <div className={classes.table__title}>
            <h4>Product</h4>
            <h4 className={"d-none d-sm-block"}>By</h4>
            <h4>Price</h4>
            <h4></h4>
          </div>
          <div className={classes.product__listing__container}>
            <div className={classes.product__list}>
              {dataPrinting(props.items)}
            </div>
          </div>
          {!props.wishlist ? (
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
          action={() => props.refresh()}
          content="Try adding some products to wishlist"
        />
      )}
    </div>
  );
};

export default ProductTable;
