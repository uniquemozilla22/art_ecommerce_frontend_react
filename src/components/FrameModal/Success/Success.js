import React from "react";
import classes from "./Success.module.css";

const Success = ({ message, handleDismiss }) => {
  return (
    <div className={classes.success__container}>
      <div class={classes.main_container}>
        <div class={classes.check_container}>
          <div class={classes.check_background}>
            <svg
              viewBox="0 0 65 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 25L27.3077 44L58.5 7"
                stroke="white"
                strokeWidth="13"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div class={classes.check_shadow}></div>
        </div>
      </div>
      <div className={classes.content__container}>
        <p className={classes.message__container}>{message}</p>
        <button className={classes.button} onClick={(e) => handleDismiss(e)}>
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Success;
