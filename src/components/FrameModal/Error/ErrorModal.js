import React from "react";
import classes from "./ErrorModal.module.css";
const ErrorModal = ({ message, handleDismiss }) => {
  return (
    <div className={classes.error__container}>
      <svg class={classes.animate}>
        <polyline points="1 79, 79 1" />
        <polyline points="79 79, 1 1" />
      </svg>
      <div className={classes.content__container}>
        <p className={classes.message__container}>{message}</p>
        <button className={classes.button} onClick={(e) => handleDismiss(e)}>
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
