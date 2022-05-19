import React from "react";
import classes from "./ArtistsGrid.module.css";
import ArtistCard from "../ArtistCard/ArtistCard";

const ArtistsGrid = ({ artists }) => {
  return (
    <div className={classes.artists__grid__container}>
      {artists.map((artist, index) => (
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <ArtistCard
            id={artist.id}
            name={artist.name}
            image={artist.image}
            position={artist.position}
            like={artist.likes}
            delay={index}
            sm
          />
        </div>
      ))}
    </div>
  );
};

export default ArtistsGrid;
