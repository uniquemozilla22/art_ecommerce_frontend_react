import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ClearCartGlobally from "../../../../store/actions/Cart/Clear.post";
import DataNotFound from "../../../DataNotFound/DataNotFound";
import ProductFeild from "../../../ProductFeild/ProductFeild";
import classes from "./CartModalBody.module.css";
import { Link } from "react-router-dom";
import { showConfirmation } from "../../../../store/actions/Confirmation/Confirmation.action";
import CreateOrder from "../../../../store/actions/Order/Order.post";

const CartModalBody = (props) => {
  const [data, setData] = useState(props.data);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setData(props.data);
    setTotal(totalPriceHandler(props.data));
  }, [props.data]);

  const totalPriceHandler = (data) => {
    let totalItemPrice = 0;
    data?.forEach(
      (item) => (totalItemPrice = totalItemPrice + +item.data.unit_price)
    );
    return totalItemPrice;
  };

  const clearCart = () => dispatch(ClearCartGlobally());

  const printData = (data) => {
    if (!data.length == 0) {
      return (
        <>
          <div className={classes.clear__button}>
            <button onClick={() => clearCart()}>Clear Cart</button>
          </div>
          {data?.map((cartitem) => (
            <ProductFeild
              key={cartitem.data.id}
              title={cartitem.data.name}
              price={cartitem.data.unit_price}
              description={cartitem.data.description}
              image={cartitem.data.image_url}
              remove={() => props.removeItem({ id: cartitem.data.id })}
            />
          ))}
        </>
      );
    } else {
      return (
        <DataNotFound
          action={() => console.log(data)}
          content="Try adding some items"
        />
      );
    }
  };

  const onAccept = () => dispatch(CreateOrder());

  const checkoutButton = () => {
    dispatch(
      showConfirmation(
        <p>
          Your cart items will be moved to order and your cart will be cleared.
        </p>,
        onAccept
      )
    );
  };

  return (
    <div className={classes.cart__body__container}>
      {printData(props.data)}
      {total ? (
        <div className={classes.cart__footer}>
          <div className={classes.cart__totalContent}>
            <h4>Grand Total</h4>
            <h2>NPR.{total} /-</h2>
          </div>
          <div className={classes.checkoutButton}>
            <button onClick={(e) => checkoutButton()}>Checkout</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartModalBody;
