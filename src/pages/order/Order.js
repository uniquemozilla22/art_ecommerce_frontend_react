import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import ProductTable from "../../components/ProductTable/ProductTable";
import { showConfirmation } from "../../store/actions/Confirmation/Confirmation.action";
import GetOrderList from "../../store/actions/Order/OrderList.fetch";
import RemoveProductOnOrder from "../../store/actions/Order/RemoveProduct.delete";
import classes from "./Order.module.css";

const Order = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchOrderData();
  }, []);

  const fetchOrderData = async () => {
    const orderList = await dispatch(GetOrderList());
    setData(orderList);
    console.log(orderList);
  };

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleCheck = (e) => setSelectedOrder(e.target.name);

  const handleDelete = (order, product) => {
    const confirmData = {
      title: "The Item will be removed from #" + order + ".",
      onAccept: (order, product) =>
        dispatch(RemoveProductOnOrder(order, product)),
    };
    dispatch(showConfirmation(confirmData.title, confirmData.onAccept));
  };

  return (
    <div className={classes.order}>
      <div className="container">
        {data ? (
          data?.length !== 0 ? (
            <Form>
              {data?.map((order, index) => (
                <Form.Check
                  key={index}
                  label={
                    <ProductTable
                      items={order.orderItems}
                      order={order.id}
                      removeFunction={(product) =>
                        handleDelete(order.id, product)
                      }
                    />
                  }
                  name={order.id}
                  value={order.id}
                  type={"radio"}
                  className={classes.checkbox}
                  onChange={handleCheck}
                />
              ))}
            </Form>
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
