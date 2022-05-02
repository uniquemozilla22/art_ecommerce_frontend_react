import React from "react";
import { Link } from "react-router-dom";
import ArtistCard from "../ArtistCard/ArtistCard";
import classes from "./FeaturedArtistSection.module.css";

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
          {props.artists.map((artist, index) => (
            <div className=" col-lg-4 col-xs-12 col-md-6 " key={index}>
              <ArtistCard
                id={artist.id}
                name={artist.name}
                image={artist.image}P
                position={artist.position}
                like={artist.likes}
                delay={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtistSection;
