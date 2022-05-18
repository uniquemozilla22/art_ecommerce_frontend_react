import React from "react";
import { animated, useSpring } from "react-spring";
import classes from "./ReturnItem.module.css";
const ReturnItem = (props) => {
  return (
    <animated.div
      className={classes.howtoreturnitem}
      style={useSpring({
        loop: false,
        from: { x: 50, opacity: 0 },
        to: { x: 0, opacity: 1 },
        delay: props.index * 200,
      })}
    >
      <span>{props.index}</span>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </div>
    </animated.div>
  );
};

export default ReturnItem;
