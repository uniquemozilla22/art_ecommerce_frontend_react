import React, { useEffect, useState } from "react";
import ProductFeild from "../../../../ProductFeild/ProductFeild";
import classes from "./CartModalBody.module.css";

const CartModalBody = (props) => {
  const [data, setData] = useState(props.data);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setData(props.data);
    setTotal(totalPriceHandler(props.data));
  }, [props.data]);

  const totalPriceHandler = (data) => {
    let totalItemPrice = 0;
    data.forEach((item) => (totalItemPrice = totalItemPrice + +item.price));
    return totalItemPrice;
  };
  return (
    <div className={classes.cart__body__container}>
      {data.map((cartitem) => {
        return (
          <ProductFeild
            key={cartitem.id}
            title={cartitem.name}
            price={cartitem.price}
            description={cartitem.description}
            image={cartitem.image}
            remove={() => props.removeItem(cartitem)}
          />
        );
      })}

      <div className={classes.cart__footer}>
        <div className={classes.cart__totalContent}>
          <h4>Grand Total</h4>
          <h2>NPR.{total} /-</h2>
        </div>
        <div className={classes.checkoutButton}>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartModalBody;
