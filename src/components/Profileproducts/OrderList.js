import { ClassSharp } from "@mui/icons-material";
import React from "react";
import classes from "./OrderList.module.css";

const OrderList = ({ datas, cancelled }) => {
  console.log(datas);
  return (
    <div className={classes.order__list__container}>
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          {cancelled ? (
            <>
              <th>Date of Cancelation</th>
            </>
          ) : (
            <>
              <th>Status</th>
              <th>Payment</th>
            </>
          )}
        </tr>
        {datas.map((data) => (
          <OrderItem {...data} />
        ))}
      </table>
    </div>
  );
};

const OrderItem = ({ id, name, image, status, payment, cancelledDate }) => {
  return (
    <tr className={classes.tablerow__products}>
      <td>
        <img src={image} alt={name} />
      </td>
      <td>{name}</td>
      {cancelledDate ? (
        <td>{cancelledDate}</td>
      ) : (
        <>
          <td>{status}</td>
          <td>{payment}</td>
        </>
      )}
    </tr>
  );
};

export default OrderList;
