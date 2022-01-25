import React from "react";
import classes from "./ArtistSection.module.css";
import artist from "../../Assets/gal1.png";
import ProductSection from "../TrendingSection/ProductSection";
import { animated, useSpring } from "react-spring";

const ArtistSection = (props) => {
  const useSlideWidth = (delay) => {
    return useSpring({
      loop: false,
      from: { width: "0%", opacity: 0 },
      to: { width: "100%", opacity: 1 },
      delay,
    });
  };
  return (
    <div className={classes.artist__section}>
      <div className={"container-fluid"}>
        <div className={"row " + classes.artistSection__container}>
          <div className={"col-4  d-none d-md-block"}>
            <animated.div
              className={classes.artist__image__container}
              style={useSlideWidth(0)}
            >
              <img src={artist} alt={"Artist"} />
              <div className={classes.artist__quote}>
                <h3>"Art is the lie that enables us to realize the truth."</h3>
                <p>{props.artistName}</p>
              </div>
            </animated.div>
          </div>
          <div className="col-12  col-xs-12  col-sm-12 col-md-8">
            <ProductSection
              title={props.artistName.split(" ")[1] + "'s Arts"}
              products={props.products}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistSection;
