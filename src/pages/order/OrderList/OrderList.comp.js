import {
  DeleteOutlined,
  PaymentsOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ProductTable from "../../../components/ProductTable/ProductTable";
import { showConfirmation } from "../../../store/actions/Confirmation/Confirmation.action";
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
}) => {
  const [showProducts, setShowProducts] = useState(false);
  const dispatch = useDispatch();

  const [orderItem, setOrderItem] = useState(orderItems);

  const handleCloseProductsModal = () => {
    setShowProducts(false);
  };

  const handleOpenProductsModal = () => {
    setShowProducts(true);
  };

  const handleDeleteProduct = (items, order, product) => {
    dispatch(RemoveProductOnOrder(order, product));
    const orderItems = items.filter((item) => item.data.id !== product);
    setOrderItem(orderItems);
    if (orderItems.length == 0) {
      fetchOrderData();
      handleCloseProductsModal();
    }
  };

  const handleDispatchDeleteProduct = (order, product) => {
    const confirmData = {
      title: "The Item will be removed from #" + order + ".",
      onAccept: () => handleDeleteProduct(orderItem, order, product),
    };
    dispatch(showConfirmation(confirmData.title, confirmData.onAccept));
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
              {net_price
                ? parseInt(net_price).toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "NPR",
                  })
                : 0}
            </span>
          </p>
          <div
            className={"d-none d-md-block " + classes.action__icons__container}
          >
            <Tooltip title={"See Order #" + id}>
              <RemoveRedEyeOutlined
                className={classes.icons}
                onClick={(e) => handleOpenProductsModal()}
              />
            </Tooltip>
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
                handleOpenProductsModal();
              }}
            >
              <RemoveRedEyeOutlined />
              See Order <span>#{id}</span>
            </div>
            <div className={classes.button}>
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
      <Modal show={showProducts} onHide={handleCloseProductsModal} size="lg">
        <ProductTable
          items={orderItem}
          order={"Order: #" + id}
          removeFunction={(product) => handleDispatchDeleteProduct(id, product)}
        />
      </Modal>
    </>
  );
};

export default OrderList;
