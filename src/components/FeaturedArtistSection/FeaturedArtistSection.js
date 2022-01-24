import React from "react";
import { Link } from "react-router-dom";
import ArtistCard from "../ArtistCard/ArtistCard";
import classes from "./FeaturedArtistSection.module.css";
import artist1 from "../../Assets/artist1.png";
import artist2 from "../../Assets/artist2.png";
import artist3 from "../../Assets/artist3.png";

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
          <div className=" col-lg-4 col-xs-12 col-md-6 ">
            <ArtistCard
              name="Peter Chung"
              image={artist1}
              position="Abstract artist"
              like={99}
            />
          </div>
          <div className="col-lg-4 col-xs-12 col-md-6 ">
            <ArtistCard
              name="Furba Tamang"
              image={artist2}
              position="Free-style artist"
              like={92}
            />
          </div>
          <div className="col-lg-4 col-xs-12 col-md-6 ">
            <ArtistCard
              name="Sunima Shrestha"
              image={artist3}
              position="Abstract artist"
              like={91}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtistSection;
