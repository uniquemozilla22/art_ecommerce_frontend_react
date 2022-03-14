import { Avatar } from "@mui/material";
import React from "react";
import classes from "./Card.module.css";

const CardBalance = ({ balance, email }) => {
  return (
    <>
      <div className={classes.balance__container}>
        <p>Your Balance</p>
        <div className={classes.avatar}>
          <Avatar>{email.charAt(0).toUpperCase()}</Avatar>
          <div>
            <p>{email.split("@")[0]}</p>
            <p>
              <span>{balance.toLocaleString("hi-IN")}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBalance;
