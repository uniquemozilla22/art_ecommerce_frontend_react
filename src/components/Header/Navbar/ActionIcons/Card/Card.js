import { Avatar } from "@mui/material";
import React from "react";
import classes from "./Card.module.css";

const CardBalance = ({ balance, email }) => {
  return (
    <>
      <div className={classes.balance__container}>
        <div className={classes.avatar}>
          <Avatar>{email?.charAt(0).toUpperCase()}</Avatar>
          <div className={classes.content__container}>
            <p>
              <span>{balance.toLocaleString("hi-IN")}</span>
            </p>
            <p>{email?.split("@")[0]}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBalance;
