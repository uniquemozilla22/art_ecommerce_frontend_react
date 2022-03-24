import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ProductTable from "../../components/ProductTable/ProductTable";
import classes from "./Checkout.module.css";
import removeCartItem from "../../store/actions/Cart/RemoveItem.post";
import CheckoutInformation from "../../components/CheckoutInformation/CheckoutInformation";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import CartItems from "../../store/actions/Cart/CartItems.fetch";
import GetOrderList from "../../store/actions/Order/OrderList.fetch";

const Checkout = (props) => {
  const cartItems = useSelector((state) => state.cartContent.cartItems);
  const dispatch = useDispatch();

  const [data, setData] = useState(cartItems);

  const removeCartItem = (id) => dispatch(removeCartItem({ id }));

  const handleFetchCart = () => dispatch(CartItems());

  const handleFetchOrders = () => {
    let order = dispatch(GetOrderList());
  };
  useEffect(() => {
    setData(cartItems);
  }, [cartItems]);

  return (
    <div className={classes.checkout__page}>
      <div className="container-fluid">
        <div className={classes.header__title}>
          <h1>Checkout.</h1>
        </div>
        <div className="row">
          <div className={"col-lg-8 col-md-8 col-sm-12 col-xs-12"}>
            {data ? (
              data.length !== 0 ? (
                <ProductTable items={data} removeFunction={removeCartItem} />
              ) : (
                <DataNotFound
                  content={"No Cart Item Found! Try adding some items to cart"}
                  action={handleFetchCart}
                />
              )
            ) : null}
          </div>
          <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12"}>
            <CheckoutInformation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
