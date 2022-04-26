import {
  DeleteOutlined,
  PaymentsOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import {
  Tooltip,
  AvatarGroup,
  Avatar,
  StyledBadge,
  Badge,
  SmallAvatar,
} from "@mui/material";
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
  deleteOrder,
  cancelOrder,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [orderItem, setOrderItem] = useState(orderItems);
  const classGenerator = (s) => {
    switch (s) {
      case "paid":
        return classes.paid__container;
      case "cancelled":
        return classes.cancelled__container;
      default:
        return null;
    }
  };
  return (
    <>
      <div
        className={classGenerator(status) + " " + classes.orderList__container}
      >
        <div className={classes.image__container}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              orderItems.length >= 2 && (
                <Avatar
                  alt="Travis Howard"
                  className={classes.small__counter}
                  variant={"rounded"}
                >
                  +{orderItems.length - 1}
                </Avatar>
              )
            }
          >
            <Avatar
              alt="Travis Howard"
              src={orderItems[0].data.image_url}
              variant={"rounded"}
              sx={{ height: "150px", width: "150px" }}
            >
              +{orderItems[0]?.data.name.charAt(0)}
            </Avatar>
          </Badge>
        </div>
        <div className={classes.information__container}>
          <div className={classes.orderID}>
            <h3>Order #{id} </h3>
          </div>
          <div className={classes.data__container}>
            <div className={classes.data__item}>
              <h4>Status</h4>
              <h5>{status}</h5>
            </div>
            <div className={classes.data__item}>
              <h4>Items</h4>
              <h5>{orderItem?.length}</h5>
            </div>
            <div className={classes.data__item}>
              <h4>Net Price</h4>
              <h5>
                {parseInt(net_price).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "NRS",
                })}
              </h5>
            </div>
            <div className={classes.data__item}>
              <h4>Estimated Delivery</h4>
              <h5>{new Date().getDate() + "/" + new Date().getMonth()}</h5>
            </div>
          </div>
        </div>
        <div className={classes.buttons__container}>
          <button onClick={(e) => navigation("../orders/" + id)}>
            {" "}
            View Order Details
          </button>
          {cancelOrder && (
            <button onClick={(e) => cancelOrder(id)}>Cancel Order</button>
          )}
          {deleteOrder && (
            <button onClick={(e) => deleteOrder(id)}>Delete Order</button>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderList;
