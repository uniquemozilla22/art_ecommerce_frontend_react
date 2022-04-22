import {
  DeleteOutlined,
  PaymentsOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ProductTable from "../../../components/ProductTable/ProductTable";
import { showConfirmation } from "../../../store/actions/Confirmation/Confirmation.action";
import { WarningMessage } from "../../../store/actions/Message/Message";
import RemoveProductOnOrder from "../../../store/actions/Order/RemoveOrderProduct.delete";
import classes from "./OrderList.module.css";

const OrderList = ({
  id,
  status,
  orderItems,
  payment_status,
  net_price,
  fetchOrderData,
  deleteOrder,
  checkout,
  selectOrderToCheckout,
  handleOrderPaymentChange,
}) => {
  const [showProducts, setShowProducts] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [orderItem, setOrderItem] = useState(orderItems);

  const handleCloseProductsModal = () => {
    setShowProducts(false);
  };

  const handleOpenProductsModal = () => {
    setShowProducts(true);
  };

  const calculate_net = (items) => {
    let totalprice = 0;
    const prices = items.map((product) => product.data.unit_price);

    prices.forEach(
      (productprice) => (totalprice = totalprice + parseFloat(productprice))
    );

    return totalprice;
  };
  return (
    <>
      <div
        className={
          classes.orderList +
          " " +
          (!checkout
            ? payment_status
              ? classes.paid_order
              : classes.not_paid_order
            : "")
        }
      >
        <div className={classes.order_id}>
          <p>
            Order <span>#{id}</span>
          </p>
        </div>
        <div className={classes.order_items}>
          <p>
            Items
            <span>{orderItems.length}</span>
          </p>
        </div>
        <div className={classes.order_status}>
          <p>
            Status{" "}
            <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
          </p>
        </div>
        <div className={classes.order_action}>
          <p>
            Net{" "}
            <span>
              {orderItem
                ? parseInt(calculate_net(orderItem)).toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "NPR",
                  })
                : "NPR 0.00"}
            </span>
          </p>
          <div
            className={"d-none d-md-block " + classes.action__icons__container}
          >
            <Link to={"" + id}>
              <Tooltip title={"See Order #" + id}>
                <RemoveRedEyeOutlined className={classes.icons} />
              </Tooltip>
            </Link>

            {payment_status ? null : (
              <>
                {!checkout && (
                  <Tooltip title={"Deliver this item for #" + id}>
                    <PaymentsOutlined
                      className={classes.icons}
                      onClick={(e) => selectOrderToCheckout(id)}
                    />
                  </Tooltip>
                )}
                <Tooltip title={"Delete Item #" + id}>
                  <DeleteOutlined
                    className={classes.icons}
                    onClick={(e) => deleteOrder(id)}
                  />
                </Tooltip>
              </>
            )}
          </div>
          <div
            className={"d-flex d-md-none " + classes.action_mobile_container}
          >
            <div
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
                navigation("" + id);
              }}
            >
              <RemoveRedEyeOutlined />
              See Order <span>#{id}</span>
            </div>
            <div
              className={classes.button}
              onClick={(e) => selectOrderToCheckout(id)}
            >
              <PaymentsOutlined />
              Place Order <span>#{id}</span>
            </div>
            <div
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
                deleteOrder(id);
              }}
            >
              <DeleteOutlined />
              Delete Order<span>#{id}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
