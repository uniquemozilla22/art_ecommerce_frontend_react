import { FavoriteOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
import { animated, useSpring } from "react-spring";
import classes from "./MasonryItem.module.css";

const MasonryItem = ({ image, name, artist, height, like, delay }) => {
  return (
    <div className={classes.container__masontry__item} style={{ height }}>
      <animated.div
        className={classes.masonryItem}
        style={useSpring({
          loop: { reverse: true },
          from: { y: 5 },
          to: { y: 0 },
          config: { duration: 1000 },
          delay: delay * 100,
        })}
      >
        <div className={classes.imageContainer}>
          <img
            src={image}
            alt={`${artist}'s Art`}
            width={"100%"}
            height="300px"
          />
        </div>
        <div className={classes.content__container}>
          <h1>
            {name}
            <div className={classes.like__container}>
              <Tooltip title={`Like ${name}`}>
                <FavoriteOutlined fontSize="small"></FavoriteOutlined>
              </Tooltip>
              <p>{like}</p>
            </div>
          </h1>
          <h4>{artist}</h4>
        </div>
      </animated.div>
    </div>
  );
};

export default MasonryItem;
