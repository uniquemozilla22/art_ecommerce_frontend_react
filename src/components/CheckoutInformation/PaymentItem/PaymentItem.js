import { PaymentOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import classes from "./PaymentItem.module.css";
import khalti from "../../../Assets/khalti.png";
import esewa from "../../../Assets/esewa.png";
import { Form } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
const Payment = ({ name, id, checked, handleSelected, image_url }) => {
  const iconPrinter = (name) => {
    if (name === "khalti") {
      return <img src={khalti} alt={name} />;
    } else if (name === "esewa") {
      return <img src={esewa} alt={name} />;
    } else {
      return <PaymentOutlined />;
    }
  };
  return (
    <div className={classes.checkbox}>
      <label className={classes.checkbox_wrapper}>
        <input
          type="radio"
          className={classes.checkbox_input}
          onChange={(e) => handleSelected(id, name)}
          name={"payment"}
          checked={checked}
        />
        <span className={classes.checkbox_tile}>
          <span className={classes.checkbox_icon}>{iconPrinter(name)}</span>
          <span className={classes.checkbox_label}>
            {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
          </span>
        </span>
      </label>
    </div>
  );
};

export const SelectionContainer = ({
  comp,
  handleSelected,
  checked,
  id,
  count,
}) => {
  return (
    <animated.div className={classes.checkbox}>
      <label className={classes.checkbox_wrapper}>
        <input
          type="radio"
          className={classes.checkbox_input}
          onChange={(e) => handleSelected(id)}
          name={"payment"}
          checked={checked}
        />
        <span className={classes.checkbox_tile}>
          <span className={classes.checkbox_icon}>{comp}</span>
        </span>
      </label>
    </animated.div>
  );
};

export default Payment;
