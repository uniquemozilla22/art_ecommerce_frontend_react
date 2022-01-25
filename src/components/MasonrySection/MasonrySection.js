import { Masonry } from "@mui/lab";
import { Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MasonryItem from "../MasonryItem/MasonryItem";
import classes from "./MasonrySection.module.css";
import art1 from "../../Assets/art1.jpg";
import art2 from "../../Assets/art2.jpg";
import art3 from "../../Assets/art3.jpg";

const MasonrySection = (props) => {
  const split = props.title.split(" ");
  const lastTitle = split.pop();
  const heights = [810, 400, 810, 400, 400, 400];

  return (
    <div className={classes.masonrySection}>
      <div className={"container-fluid"}>
        <div className={classes.section__title}>
          <h1>
            {split} <span>{lastTitle}</span>
          </h1>
          <Link to="">See More</Link>
        </div>

        <div className="row">
          <Masonry columns={4} spacing={4}>
            {heights.map((height, index) => (
              <MasonryItem
                image={art3}
                name={"One"}
                artist={"Furba Tamang"}
                height={height}
                like={99}
              />
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default MasonrySection;
