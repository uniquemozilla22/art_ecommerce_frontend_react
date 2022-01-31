import React from "react";
import classes from "./ArtistDetails.module.css";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const ArtistDetails = ({ name, facebook, twitter, instagram }) => {
  return (
    <div className={classes.artist__details}>
      <div className="row">
        <div className={" col-lg-8 col-md-12 " + classes.about__container}>
          <h3>About {name.split(" ")[0]}</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div
          className={
            "col-lg-2 col-md-6 col-sm-6 col-xs-12 " + classes.social_links
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
            "col-lg-2 col-md-6 col-sm-6 col-xs-12 " + classes.action__buttons
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
