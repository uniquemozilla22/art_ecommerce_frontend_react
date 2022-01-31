import { ClassNames } from "@emotion/react";
import React from "react";
import classes from "./ArtistBanner.module.css";

const ArtistBanner = ({
  background,
  name,
  title,
  rank,
  artsSold,
  likes,
  artistImage,
}) => {
  return (
    <>
      <div
        className={"container-fluid " + classes.artist__banner__container}
        style={{ backgroundImage: `url("${background}")` }}
      >
        <div className={classes.details__container}>
          <img src={artistImage} alt={name} />
          <div className={classes.content__container}>
            <h1>{name}</h1>
            <p>{title}</p>
          </div>
        </div>
        <div className={"d-none d-md-flex " + classes.progress__container}>
          <div className={classes.progress}>
            <h3>#{rank}</h3>
            <p>Rank</p>
          </div>
          <div className={classes.progress}>
            <h3>{artsSold}</h3>
            <p>Arts Sold</p>
          </div>
          <div className={classes.progress}>
            <h3>{likes}</h3>
            <p>Likes</p>
          </div>
        </div>
      </div>
      <div className={"d-xs-block d-md-none " + classes.progress__container}>
        <div className={classes.progress}>
          <h3>#{rank}</h3>
          <p>Rank</p>
        </div>
        <div className={classes.progress}>
          <h3>{artsSold}</h3>
          <p>Arts Sold</p>
        </div>
        <div className={classes.progress}>
          <h3>{likes}</h3>
          <p>Likes</p>
        </div>
      </div>
    </>
  );
};

export default ArtistBanner;
