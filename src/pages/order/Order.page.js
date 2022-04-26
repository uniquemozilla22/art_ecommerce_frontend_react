import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Tab, Nav, Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import { showConfirmation } from "../../store/actions/Confirmation/Confirmation.action";
import { WarningMessage } from "../../store/actions/Message/Message";
import GetOrderList from "../../store/actions/Order/OrderList.fetch";
import classes from "./Order.module.css";
import OrderList from "./OrderList/OrderList.comp";
import { Tooltip } from "@mui/material";
import { RefreshOutlined } from "@mui/icons-material";
import OrderComponent from "./OrderComponent.comp";

const Order = (props) => {
  const [data, setData] = useState(null);

  const [cancelledData, setCancelledData] = useState(null);
  const [draftedData, setDraftedData] = useState(null);
  const [paidData, setPaidData] = useState(null);
  const [shippingData, setShippingData] = useState(null);
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
    setCancelledData(fetchData.filter((o) => o.status === "cancelled"));
    setDraftedData(fetchData.filter((o) => o.status === "draft"));
    setPaidData(fetchData.filter((o) => o.status === "paid"));
    setShippingData(fetchData.filter((o) => o.status === "shipping"));
  };

  const cancelled = (order) => {
    let updating = paidData;
    let cancelledIndex = paidData.findIndex((or) => or.id === order);
    console.log(cancelledIndex);
    updating[cancelledIndex] = {
      ...updating[cancelledIndex],
      status: "cancelled",
    };
    setPaidData(paidData.filter((o) => o.id !== order));
    setCancelledData([...cancelledData, updating[cancelledIndex]]);
  };

  const deleteOrder = (order) => {
    let updated = draftedData.filter((orders) => orders.id !== order);
    setDraftedData(updated);
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
                    Shipping <span>{shippingData?.length}</span>
                  </h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={classes.navigation__item}>
                <Nav.Link eventKey={"draft"}>
                  <h3>
                    Draft <span>{draftedData?.length}</span>
                  </h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={classes.navigation__item}>
                <Nav.Link eventKey={"paid"}>
                  <h3>
                    Paid <span>{paidData?.length}</span>
                  </h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={classes.navigation__item}>
                <Nav.Link eventKey={"cancelled"}>
                  <h3>
                    Cancelled <span>{cancelledData?.length}</span>
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
                  <OrderComponent
                    title="Drafted Orders"
                    orders={draftedData}
                    fetchOrderData={fetchOrderData}
                    cancelled={cancelled}
                    deleteOrder={deleteOrder}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="paid">
                  <OrderComponent
                    title="Paid Orders"
                    orders={paidData}
                    fetchOrderData={fetchOrderData}
                    cancelled={cancelled}
                    deleteOrder={deleteOrder}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="cancelled">
                  <OrderComponent
                    title="Cancelled Orders"
                    orders={cancelledData}
                    fetchOrderData={fetchOrderData}
                    cancelled={cancelled}
                    deleteOrder={deleteOrder}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="shipping">
                  <OrderComponent
                    title="Shipping Orders"
                    orders={shippingData}
                    fetchOrderData={fetchOrderData}
                    cancelled={cancelled}
                    deleteOrder={deleteOrder}
                  />
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
