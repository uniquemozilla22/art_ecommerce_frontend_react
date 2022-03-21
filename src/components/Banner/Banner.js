import { DoubleArrowTwoTone } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Banner.module.css";
import gal1 from "../../Assets/gal1.png";
import { Image } from "react-bootstrap";
import { animated, useSpring } from "react-spring";

const Banner = () => {
  const useSlideWidth = (delay) => {
    return useSpring({
      loop: false,
      from: { width: "0%", opacity: 0 },
      to: { width: "100%", opacity: 1 },
      delay,
    });
  };

  const useAppearAnimation = (delay) => {
    return useSpring({
      loop: false,
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay,
    });
  };
  return (
    <animated.div className={classes.banner__section}>
      <div className={"container-fluid"}>
        <div className={"row " + classes.banner__wrapper}>
          <div className={"col-xs-12 col-md-4 col-4 "}>
            <div className={classes.banner__content}>
              <animated.h4 style={useAppearAnimation(400)}>
                -Edgar Degas
              </animated.h4>
              <animated.h1 style={useAppearAnimation(600)}>
                <span>Art</span>, The More you share
                <br /> the better it <span>gets.</span>
              </animated.h1>
              <animated.div style={useAppearAnimation(800)}>
                <Link to="/blog" className={classes.link}>
                  Learn More <DoubleArrowTwoTone />
                </Link>
              </animated.div>
            </div>
          </div>
          <div className={"col-8"}>
            <animated.div
              className={classes.image__container}
              style={{
                backgroundImage: `url("${gal1}") `,
                ...useSlideWidth(0),
              }}
            ></animated.div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Banner;
