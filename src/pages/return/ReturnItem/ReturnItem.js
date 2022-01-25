import React from "react";
import { animated, useSpring } from "react-spring";
import classes from "./ReturnItem.module.css";
const ReturnItem = (props) => {
  const useAnimationStyle = (delay) => {
    return useSpring({
      loop: false,
      from: { x: 50, opacity: 0 },
      to: { x: 0, opacity: 1 },
      delay: delay * 200,
    });
  };

  return (
    <animated.div
      className={classes.howtoreturnitem}
      style={useAnimationStyle(props.index)}
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
