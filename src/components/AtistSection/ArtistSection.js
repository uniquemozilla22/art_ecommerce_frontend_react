import React, { useState, useEffect } from "react";
import classes from "./ArtistSection.module.css";
import ProductSection from "../ProductSection/ProductSection";
import { animated, useSpring } from "react-spring";
import FetchSupplier from "../../store/actions/FetchData/SupplierbyID.fetch.js";
import { useDispatch } from "react-redux";

const ArtistSection = (props) => {
  const dispatch = useDispatch();
 
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    fetchTrendingArtist();
  }, []);

  const fetchTrendingArtist = async () => {
    const artistData = await dispatch(FetchSupplier(18));
    setArtist(artistData);
  };
  return (
    <div className={classes.artist__section}>
      <div className={"container-fluid"}>
        <div className={"row " + classes.artistSection__container}>
          <div className={"col-4  d-none d-md-block"}>
            <animated.div
              className={classes.artist__image__container}
              style={useSpring({
                loop: false,
                from: { width: "0%", opacity: 0 },
                to: { width: "100%", opacity: 1 },
                delay: 100,
              })}
            >
              <img
                src={
                  "https://m.media-amazon.com/images/I/713jNeMYLFL._SX425_.jpg"
                }
                alt="Artist"
              />
              <div className={classes.artist__quote}>
                <h3>"Art is the lie that enables us to realize the truth."</h3>
                {artist && (
                  <p>
                    {artist.data.first_name +
                      " " +
                      artist.data.middle_name +
                      " " +
                      artist.data.last_name}
                  </p>
                )}
              </div>
            </animated.div>
          </div>
          <div className="col-12  col-xs-12  col-sm-12 col-md-8">
            {artist && (
              <ProductSection
                title={
                  artist.data.first_name.charAt(0).toUpperCase() +
                  artist.data.first_name.slice(1) +
                  "'s Arts"
                }
                products={artist.products.slice(0, 3)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistSection;
