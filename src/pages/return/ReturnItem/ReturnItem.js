import React from "react";
import { animated, useSpring } from "react-spring";
import classes from "./ReturnItem.module.css";
const ReturnItem = (props) => {
  return (
    <animated.div className={classes.howtoreturnitem}>
      <span>{props.index}</span>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </div>
    </animated.div>
  );
};

export default ReturnItem;
