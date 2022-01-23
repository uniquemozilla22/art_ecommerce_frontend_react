import { DoubleArrowTwoTone } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Banner.module.css";
import gal1 from "../../Assets/gal1.png";
import { Image } from "react-bootstrap";

const Banner = () => {
  return (
    <div className={classes.banner__section}>
      <div className={"container-fluid"}>
        <div className={"row " + classes.banner__wrapper}>
          <div className={"col-xs-12 col-md-4 col-4 "}>
            <div className={classes.banner__content}>
              <h4>-Edgar Degas</h4>
              <h1>
                <span>Art</span>, The More you share
                <br /> the better it <span>gets.</span>
              </h1>
              <Link to="./" className={classes.link}>
                Learn More <DoubleArrowTwoTone />
              </Link>
            </div>
          </div>
          <div className={"col-8"}>
            <div
              className={classes.image__container}
              style={{
                backgroundImage: `url("${gal1}") `,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
