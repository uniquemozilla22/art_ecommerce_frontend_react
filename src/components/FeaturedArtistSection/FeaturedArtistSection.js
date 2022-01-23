import React from "react";
import { Link } from "react-router-dom";
import ArtistCard from "../ArtistCard/ArtistCard";
import classes from "./FeaturedArtistSection.module.css";

const FeaturedArtistSection = (props) => {
  const split = props.title.split;
  const lastTitle = props.title.pop();
  return (
    <div className={classes.featured__artist__section}>
      <div className="container-fluid">
        <div className={classes.title__container}>
          <h1 className={classes.headerTitle}>
            {split}
            <span>{" " + lastTitle}</span>
          </h1>
          <Link to="./">See More</Link>
        </div>
        <div className="row">
          <div className="col-4">
            <ArtistCard />
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtistSection;
