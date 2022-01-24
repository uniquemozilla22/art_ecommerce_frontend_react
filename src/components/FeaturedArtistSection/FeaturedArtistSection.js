import React from "react";
import { Link } from "react-router-dom";
import ArtistCard from "../ArtistCard/ArtistCard";
import classes from "./FeaturedArtistSection.module.css";
import artist1 from "../../Assets/artist1.png";

const FeaturedArtistSection = (props) => {
  const split = props.title.split(" ");
  const lastTitle = split.pop();
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
            <ArtistCard
              name="Peter Chung"
              image={artist1}
              position="Abstract artist"
              like={99}
            />
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtistSection;
