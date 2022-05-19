import React from "react";
import classes from "./ArtistCard.module.css";
import { Card } from "react-bootstrap";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";

const ArtistCard = ({ id, name, image, position, like, delay, sm }) => {
  return (
    <div style={sm ? { margin: "1rem 2rem" } : null}>
      <animated.div
        className={classes.artist__card__container}
        
      >
        <Card className={classes.bidding__card}>
          <Card.Img
            variant="bottom"
            src={image}
            className={classes.image__container}
            height={sm ? "300px" : "400px"}
          />
          <Card.Body className={classes.card_body}>
            <div className={classes.card__header}>
              <Card.Title>{name}</Card.Title>
              <div className={classes.actions__container}>
                <Tooltip title={`Like ${name}`}>
                  <FavoriteBorderOutlined fontSize="small" />
                </Tooltip>
                {like}
              </div>
            </div>
            <div className={classes.priceContainer}>
              <p>{position}</p>
            </div>

            <div className={classes.linkContainer}>
              <Link to={`/artist:${id}`} className={classes.linkMain}>
                See Profile
              </Link>
              <Link to="" className={classes.linkSecondary}>
                See Arts
              </Link>
            </div>
          </Card.Body>
        </Card>
      </animated.div>
    </div>
  );
};

export default ArtistCard;
