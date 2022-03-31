import { Refresh } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import ProductTable from "../../components/ProductTable/ProductTable";
import { showConfirmation } from "../../store/actions/Confirmation/Confirmation.action";
import DeleteOrderList from "../../store/actions/Order/OrderList.delete";
import GetOrderList from "../../store/actions/Order/OrderList.fetch";
import RemoveProductOnOrder from "../../store/actions/Order/RemoveOrderProduct.delete";
import classes from "./Order.module.css";
import OrderList from "./OrderList/OrderList.comp";

const Order = (props) => {
  const [data, setData] = useState(null);
  const navigation = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    fetchOrderData();
  }, []);

  const fetchOrderData = async () => {
    const fetchData = await dispatch(GetOrderList());
    setData(fetchData);
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

  const selectOrderToCheckout = (order) => {
    const confirmData = {
      title: "The order #" + order + " will be selected in checkout",
      onAccept: () =>
        navigation("/checkout", { state: { order, redirected: true } }),
    };
    dispatch(showConfirmation(confirmData.title, confirmData.onAccept));
  };
  return (
    <div className={classes.order}>
      <div className="container">
        <div className={classes.title__container}>
          <h1>Orders.</h1>
          <Tooltip title="Refresh List">
            <Refresh onClick={(e) => fetchOrderData()} />
          </Tooltip>
        </div>
        {data ? (
          data.length !== 0 ? (
            data.map((order, index) => (
              <OrderList
                key={index}
                {...order}
                fetchOrderData={fetchOrderData}
                deleteOrder={deleteOrder}
                selectOrderToCheckout={selectOrderToCheckout}
              />
            ))
          ) : (
            <DataNotFound
              content={
                "There are no orders here try checking out some of the arts. "
              }
              action={fetchOrderData}
            />
          )
        ) : null}
      </div>
    </div>
  );
};

export default Order;

{
}
