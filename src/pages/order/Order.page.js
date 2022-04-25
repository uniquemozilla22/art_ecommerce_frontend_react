import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Tab, Nav, Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import { showConfirmation } from "../../store/actions/Confirmation/Confirmation.action";
import { WarningMessage } from "../../store/actions/Message/Message";
import DeleteOrderList from "../../store/actions/Order/OrderList.delete";
import GetOrderList from "../../store/actions/Order/OrderList.fetch";
import classes from "./Order.module.css";
import OrderList from "./OrderList/OrderList.comp";
import { Tooltip } from "@mui/material";
import { RefreshOutlined } from "@mui/icons-material";

const Order = (props) => {
  const [data, setData] = useState(null);
  const navigation = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchOrderData();
  }, []);

  useEffect(() => {
    if (state?.message) dispatch(WarningMessage(state?.message));
  }, [state?.message]);

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

  return data ? (
    <div className={classes.order + " container"}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="draft">
        <div className={"row"}>
          <div className={classes.title__container}>
            <h1>Order</h1>
          </div>
          <div className={classes.link__container + " col-md-2 col-xs-12 "}>
            <Nav className={"flex-column " + classes.navigation__link}>
              <Nav.Item className={classes.navigation__item}>
                <Nav.Link eventKey={"shipping"}>
                  <h3>
                    Shipping{" "}
                    <span>
                      {data.filter((o) => o.status === "shipping").length}
                    </span>
                  </h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={classes.navigation__item}>
                <Nav.Link eventKey={"draft"}>
                  <h3>
                    Draft{" "}
                    <span>
                      {data.filter((o) => o.status === "draft").length}
                    </span>
                  </h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={classes.navigation__item}>
                <Nav.Link eventKey={"paid"}>
                  <h3>
                    Paid{" "}
                    <span>
                      {data.filter((o) => o.status === "paid").length}
                    </span>
                  </h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={classes.navigation__item}>
                <Nav.Link eventKey={"cancelled"}>
                  <h3>
                    Cancelled{" "}
                    <span>
                      {data.filter((o) => o.status === "cancelled").length}
                    </span>
                  </h3>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          {data && (
            <div
              className={classes.content__container + "  col-md-10 col-xs-12 "}
            >
              <Tab.Content>
                <Tab.Pane eventKey="draft">
                  <div className={classes.tab__container}>
                    <div className={classes.sub__title}>
                      <h2>
                        Drafted Orders
                        <p>
                          {data.filter((o) => o.status === "draft").length}{" "}
                          Orders
                        </p>
                      </h2>
                      <Tooltip title="Refresh Order">
                        <RefreshOutlined onClick={() => fetchOrderData()} />
                      </Tooltip>
                    </div>
                    {data.filter((o) => o.status === "draft").length !== 0 ? (
                      data
                        .filter((o) => o.status === "draft")
                        .map((order, index) => {
                          return (
                            <OrderList
                              key={index}
                              {...order}
                              fetchOrderData={fetchOrderData}
                              deleteOrder={deleteOrder}
                              selectOrderToCheckout={selectOrderToCheckout}
                            />
                          );
                        })
                    ) : (
                      <DataNotFound
                        action={() => fetchOrderData()}
                        content="Try checking out some products from the cart."
                      />
                    )}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="paid">
                  <div className={classes.tab__container}>
                    <div className={classes.sub__title}>
                      <h2>
                        Paid Orders{" "}
                        <p>
                          {data.filter((o) => o.status === "paid").length}{" "}
                          Orders
                        </p>
                      </h2>
                      <Tooltip title="Refresh Order">
                        <RefreshOutlined onClick={() => fetchOrderData()} />
                      </Tooltip>
                    </div>
                    {data.filter((o) => o.status === "paid").length !== 0 ? (
                      data
                        .filter((o) => o.status === "paid")
                        .map((order, index) => {
                          return (
                            <OrderList
                              key={index}
                              {...order}
                              fetchOrderData={fetchOrderData}
                              deleteOrder={deleteOrder}
                              selectOrderToCheckout={selectOrderToCheckout}
                            />
                          );
                        })
                    ) : (
                      <DataNotFound
                        action={() => fetchOrderData()}
                        content="You dont have paid for any orders yet."
                      />
                    )}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="cancelled">
                  <div className={classes.tab__container}>
                    <div className={classes.sub__title}>
                      <h2>
                        Cancelled Orders
                        <p>
                          {data.filter((o) => o.status === "cancelled").length}{" "}
                          Orders
                        </p>
                      </h2>
                      <Tooltip title="Refresh Order">
                        <RefreshOutlined onClick={() => fetchOrderData()} />
                      </Tooltip>
                    </div>
                    {data.filter((o) => o.status === "cancelled").length !==
                    0 ? (
                      data
                        .filter((o) => o.status === "cancelled")
                        .map((order, index) => {
                          return (
                            <OrderList
                              key={index}
                              {...order}
                              fetchOrderData={fetchOrderData}
                              deleteOrder={deleteOrder}
                              selectOrderToCheckout={selectOrderToCheckout}
                            />
                          );
                        })
                    ) : (
                      <DataNotFound
                        action={() => fetchOrderData()}
                        content="Wow So far so good. No Cancellation of orders."
                      />
                    )}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="shipping">
                  <div className={classes.tab__container}>
                    <div className={classes.sub__title}>
                      <h2>
                        Shipping Orders{" "}
                        <p>
                          {data.filter((o) => o.status === "shipping").length}{" "}
                          Orders
                        </p>
                      </h2>
                      <Tooltip title="Refresh Order">
                        <RefreshOutlined onClick={() => fetchOrderData()} />
                      </Tooltip>
                    </div>
                    {data.filter((o) => o.status === "shipping").length !==
                    0 ? (
                      data
                        .filter((o) => o.status === "shipping")
                        .map((order, index) => {
                          return (
                            <OrderList
                              key={index}
                              {...order}
                              fetchOrderData={fetchOrderData}
                              deleteOrder={deleteOrder}
                              selectOrderToCheckout={selectOrderToCheckout}
                            />
                          );
                        })
                    ) : (
                      <DataNotFound
                        action={() => fetchOrderData()}
                        content="Place some orders and the artist will ship it to your address."
                      />
                    )}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          )}
        </div>
      </Tab.Container>
    </div>
  ) : (
    <Spinner />
  );
};

export default Order;

{
}
