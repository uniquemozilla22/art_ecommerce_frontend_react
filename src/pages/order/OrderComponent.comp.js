import { RefreshOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import classes from "./Order.module.css";
import OrderList from "./OrderList/OrderList.comp";
import CancelOrder from "../../store/actions/Order/CancelOrder.post";
import DeleteOrderList from "../../store/actions/Order/OrderList.delete";
import { showConfirmation } from "../../store/actions/Confirmation/Confirmation.action";

const OrderComponent = ({
  orders,
  fetchOrderData,
  cancelled,
  title,
  deleteOrder,
}) => {
  const dispatch = useDispatch();

  const [data, setData] = useState(orders);

  useEffect(() => {
    setData(orders);
  }, [orders]);

  const deleteOrderConfirm = (order) => {
    const confirmData = {
      title: "The order #" + order + " will be removed from draft.",
      onAccept: () => deleteOrderSetter(order),
    };
    dispatch(showConfirmation(confirmData.title, confirmData.onAccept));
  };
  const deleteOrderSetter = (order) => {
    const success = dispatch(DeleteOrderList(order));
    console.log(success);
    if (success) {
      deleteOrder(order);
    }
  };
  const cancel = async (order) => {
    const res = await dispatch(CancelOrder(order));
    if (res) {
      cancelled(order);
    }
  };

  const cancellationOrder = (order) => {
    const confirmData = {
      title: `The order #${order} will be cancelled and your paid amount will return`,
      onAccept: () => cancel(order),
    };
    dispatch(showConfirmation(confirmData.title, confirmData.onAccept));
  };

  return (
    data && (
      <div className={classes.tab__container}>
        {title && (
          <div className={classes.sub__title}>
            <h2>
              {title} <p>{data.length} Orders</p>
            </h2>
            <Tooltip title="Refresh Order">
              <RefreshOutlined onClick={() => fetchOrderData()} />
            </Tooltip>
          </div>
        )}
        {data.length !== 0 ? (
          data.map((order, index) => {
            if (order.status === "draft") {
              return (
                <OrderList
                  key={index}
                  {...order}
                  fetchOrderData={fetchOrderData}
                  deleteOrder={deleteOrderConfirm}
                />
              );
            } else if (order.status === "paid") {
              return (
                <OrderList
                  key={index}
                  {...order}
                  cancelOrder={cancellationOrder}
                />
              );
            } else {
              return <OrderList key={index} {...order} />;
            }
          })
        ) : (
          <DataNotFound
            action={() => fetchOrderData()}
            content="No Data Found."
          />
        )}
      </div>
    )
  );
};

export default OrderComponent;
