import React from "react";
import classes from "./ArtistCard.module.css";
import { Card } from "react-bootstrap";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

const ArtistCard = ({ name, image, position, like }) => {
  return (
    <div className={classes.artist__card__container}>
      <Card className={classes.bidding__card}>
        <Card.Img
          variant="bottom"
          src={image}
          className={classes.bidding__image}
          height="300px"
        />
        <Card.Body className={classes.card_body}>
          <div className={classes.Biddingcard__header}>
            <Card.Title>{name}</Card.Title>
            <div className={"d-none d-lg-block " + classes.actions__container}>
              <Tooltip title={`Like ${name}`}>
                <FavoriteBorderOutlined fontSize="small" />
                {like}
              </Tooltip>
            </div>
          </div>
          <div className={classes.priceContainer}>
            <p>{position}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArtistCard;
