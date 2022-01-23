import React from "react";
import classes from "./ArtistSection.module.css";
import artist from "../../Assets/gal1.png";
import ProductSection from "../TrendingSection/ProductSection";

const ArtistSection = (props) => {
  return (
    <div className={classes.artist__section}>
      <div className={"container-fluid"}>
        <div className={"row " + classes.artistSection__container}>
          <div className={"col-4  d-none d-md-block"}>
            <div className={classes.artist__image__container}>
              <img src={artist} alt={"Artist"} />
              <div className={classes.artist__quote}>
                <h3>"Art is the lie that enables us to realize the truth."</h3>
                <p>{props.artistName}</p>
              </div>
            </div>
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
