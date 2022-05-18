import React, { useState } from "react";
import classes from "./bloglist.module.css";
import FeatherIcon from "feather-icons-react";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <Link to={"/blog/1"} className={classes.card__container}>
      <animated.div
        className={`row ${classes.cardBoxList}`}
        style={useSpring({
          loop: false,
          from: { y: 50, opacity: 0 },
          to: { y: 0, opacity: 1 },
          delay:  200,
        })}
      >
        <div className="col-lg-3 col-sm-4 col-4">
          <img
            src="https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_CrashDummy_image1600w.jpg"
            className={classes.cardBoxImage}
            alt={""}
          />
        </div>
        <div className="col-lg-9 col-sm-8 col-8">
          <h4 className={classes.cardHeading}>
            Thieves Steal Gallery Owner’s Multimillion-Dollar NFT Collection:
            ‘All My Apes Gone’
          </h4>
          <div className={`row ${classes.cardAuthorListBox}`}>
            <div className="col-lg-6 col-sm-6 col-6 p-0">
              <p>June 21, 2021</p>
            </div>
            <div className="col-lg-6  col-sm-6 col-6 p-0">
              <p className={classes.cardAuthor}>Yogesh</p>
            </div>
          </div>
          <div className="d-none d-sm-none d-md-block d-lg-block">
            <p className={classes.cardDescription}>
              Proponents of NFTs argue that the novel technology is a radical
              force that will democratize art and push out gatekeepers. The
              truth is that NFTs remain inaccessible to many. The team behind
              JPG, a new website that aspires to be the Tumblr of the crypto
              world, is hoping to change that
            </p>
          </div>
        </div>
      </animated.div>
    </Link>
  );
};

export default BlogList;
