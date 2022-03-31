import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./Checkout.module.css";
import CheckoutInformation from "../../components/CheckoutInformation/CheckoutInformation";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import GetOrderList from "../../store/actions/Order/OrderList.fetch";
import OrderList from "../order/OrderList/OrderList.comp";
import DeleteOrderList from "../../store/actions/Order/OrderList.delete";
import { showConfirmation } from "../../store/actions/Confirmation/Confirmation.action";
import { Form, Spinner } from "react-bootstrap";
import { useLocation } from "react-router";

const Checkout = (props) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [data, setData] = useState(null);
  const { state } = useLocation();

  const dispatch = useDispatch();

  const handleSelection = (data) => setSelectedOrder(data);

  const handleFetchOrders = async () => {
    let order = await dispatch(GetOrderList());
    setData(order);
  };

  const deleteOrderSetter = (data, order) => {
    const success = dispatch(DeleteOrderList(order));
    if (success) {
      let updated = data.filter((orders) => orders.id !== order);
      setData(updated);
    }
  };
  const deleteOrder = (order) => {
    const confirmData = {
      title: "The order #" + order + " will be removed from draft.",
      onAccept: () => deleteOrderSetter(data, order),
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

  return (
    <div className={classes.checkout__page}>
      <div className="container-fluid">
        <div className={classes.header__title}>
          <h1>Checkout.</h1>
          {selectedOrder ? null : <h5>Please Select an Order to Continue</h5>}
        </div>
        <div className="row">
          <div
            className={
              selectedOrder
                ? "col-lg-8 col-md-8 col-sm-12 col-xs-12"
                : "col-lg-12 col-md-12 col-sm-12 col-xs-12"
            }
          >
            <Form>
              {data ? (
                data.length !== 0 ? (
                  data
                    .filter((o) => o.status === "draft")
                    .map((order, index) => (
                      <OrderListSelector
                        key={index}
                        order={order}
                        fetchOrderData={handleFetchOrders}
                        deleteOrder={deleteOrder}
                        selectedOrder={selectedOrder === order.id}
                        handleSelection={handleSelection}
                      />
                    ))
                ) : (
                  <DataNotFound
                    content={"No Orders Found! Try adding some items to order"}
                    action={handleFetchOrders}
                  />
                )
              ) : (
                <Spinner />
              )}
            </Form>
          </div>
          <div
            className={
              selectedOrder
                ? "col-lg-4 col-md-4 col-sm-12 col-xs-12"
                : "col-lg-4 col-md-4 col-sm-12 col-xs-12 d-none"
            }
          >
            {selectedOrder ? (
              <CheckoutInformation data={selectedOrder} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderListSelector = ({
  handleSelection,
  selected,
  order,
  fetchOrderData,
  deleteOrder,
}) => {
  return (
    <Form.Check
      label={
        <OrderList
          {...order}
          fetchOrderData={fetchOrderData}
          deleteOrder={deleteOrder}
          checkout
        />
      }
      name={"orders"}
      type={"radio"}
      className={classes.checkbox}
      onChange={(e) => handleSelection(order)}
      checked={selected ? true : null}
    />
  );
};

export default Checkout;
