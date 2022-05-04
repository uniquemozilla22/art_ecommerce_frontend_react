import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./Checkout.module.css";
import CheckoutInformation from "../../components/CheckoutInformation/CheckoutInformation";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import { showConfirmation } from "../../store/actions/Confirmation/Confirmation.action";
import { Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import RemoveProductOnOrder from "../../store/actions/Order/RemoveOrderProduct.delete";
import { WarningMessage } from "../../store/actions/Message/Message";
import ProductTable from "../../components/ProductTable/ProductTable";
import FetchOrderById from "../../store/actions/Order/OrderById.fetch";

const Checkout = (props) => {
  const [data, setData] = useState(null);
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleOrderPaymentChange = (name) => {
    let changingData = data;
    changingData.payment_type = name;
    setData(changingData);
  };

  const handleFetchOrders = async () => {
    if (state?.order) {
      let order = await dispatch(FetchOrderById(state?.order));
      setData(order);
    }
  };

  const handleDeleteProduct = async (items, order, product) => {
    if (data.status !== "paid") {
      const success = await dispatch(RemoveProductOnOrder(order, product));
      console.log(success);
      if (success) {
        const orderItems = items.filter((item) => item.data.id !== product);
        setData({ ...data, orderItems });
        if (orderItems.length === 0) {
          navigation("/orders", { state: { message: "Order removed" } });
        }
      }
    } else {
      dispatch(
        WarningMessage({
          message: "You cannot delete an order which has been already paid",
        })
      );
    }
  };

  const handleDispatchDeleteProduct = (order, product) => {
    const confirmData = {
      title: "The item will be removed from the order",
      onAccept: () => handleDeleteProduct(data.orderItems, order, product),
    };
    dispatch(showConfirmation(confirmData.title, confirmData.onAccept));
  };

  useEffect(() => {
    handleFetchOrders();
  }, []);

  useEffect(() => {
    if (state) {
      if (state.redirected === true) {
        handleFetchOrders();
      }
    }
  }, [state?.redirected]);

  return state.order ? (
    <div className={classes.checkout__page}>
      <div className="container-fluid">
        <div className={classes.header__title}>
          <h1>Checkout.</h1>
        </div>
        <div className="row">
          <div className={"col-lg-8 col-md-8 col-sm-12 col-xs-12"}>
            {data ? (
              data?.orderItems.length !== 0 ? (
                <ProductTable
                  items={data.orderItems}
                  removeFunction={(product) =>
                    handleDispatchDeleteProduct(data.id, product)
                  }
                  hideHeading
                />
              ) : (
                <DataNotFound
                  content={"No Orders Found! Try adding some items to order"}
                  action={handleFetchOrders}
                />
              )
            ) : (
              <Spinner />
            )}
          </div>
          <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12"}>
            {data ? (
              <CheckoutInformation
                order={data}
                data={data}
                handleOrderPaymentChange={handleOrderPaymentChange}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <DataNotFound
      content={"No Orders selected! Select an order from the order page"}
    />
  );
};

export default Checkout;
