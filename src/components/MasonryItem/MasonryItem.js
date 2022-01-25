import { FavoriteOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
import classes from "./MasonryItem.module.css";

const MasonryItem = ({ image, name, artist, height, like }) => {
  return (
    <div className={classes.container__masontry__item} style={{ height }}>
      <div className={classes.masonryItem}>
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
      </div>
    </div>
  );
};

export default MasonryItem;
