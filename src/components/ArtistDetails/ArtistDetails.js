import React from "react";
import classes from "./ArtistDetails.module.css";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const ArtistDetails = ({ name, facebook, twitter, instagram, description }) => {
  return (
    <div className={classes.artist__details}>
      <div className="row">
        <div className={" col-lg-6 col-md-12 " + classes.about__container}>
          <h3>About {name.split(" ")[0]}</h3>
          <p>{description || "Description Not Found "}</p>
        </div>
        <div
          className={
            "col-lg-3 col-md-6 col-sm-6 col-xs-12 " + classes.social_links
          }
        >
          <a className={classes.link} href="#">
            <FeatherIcon icon={"facebook"} />
            <p>@{facebook}</p>
          </a>
          <a className={classes.link} href="#">
            <FeatherIcon icon={"twitter"} />
            <p>@{twitter}</p>
          </a>
          <a className={classes.link} href="#">
            <FeatherIcon icon={"instagram"} />
            <p>@{instagram}</p>
          </a>
        </div>
        <div
          className={
            "col-lg-3 col-md-6 col-sm-6 col-xs-12 " + classes.action__buttons
          }
        >
          <div className={classes.button}>
            <FeatherIcon icon="heart" />
            <p>Follow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
