import React, { useState } from "react";
import classes from "./blogGrid.module.css";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";

const BlogGrid = () => {
  const useAnimationStyle = (delay) => {
    return useSpring({
      loop: false,
      from: { y: 20, opacity: 0 },
      to: { y: 0, opacity: 1 },
      delay: delay * 200,
    });
  };

  return (
    <Link to={`/blog/1`} className={classes.card__container}>
      <animated.div className={classes.cardBox} style={useAnimationStyle(1)}>
        <img
          src="https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_CrashDummy_image1600w.jpg"
          className={classes.cardBoxImage}
          alt=""
        />
        <h4 className={classes.cardHeading}>
          Thieves Steal Gallery Owner’s Multimillion-Dollar NFT Collection: ‘All
          My Apes Gone’
        </h4>
        <div className={`row ${classes.cardAuthorBox}`}>
          <div className="col-lg-6">
            <p>June 21, 2021</p>
          </div>
          <div className="col-lg-6">
            <p className={classes.cardAuthor}>Yogesh</p>
          </div>
        </div>
        <p className={classes.cardDescription}>
          Proponents of NFTs argue that the novel technology is a radical force
          that will democratize art and push out gatekeepers. The truth is that
          NFTs remain inaccessible to many. The team behind JPG, a new website
          that aspires to be the Tumblr of the crypto world, is hoping to change
          that
        </p>
      </animated.div>
    </Link>
  );
};

export default BlogGrid;
