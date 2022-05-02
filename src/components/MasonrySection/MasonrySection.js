import { Masonry } from "@mui/lab";
import React from "react";
import { Link } from "react-router-dom";
import MasonryItem from "../MasonryItem/MasonryItem";
import classes from "./MasonrySection.module.css";
import art1 from "../../Assets/art1.jpg";
import art2 from "../../Assets/art3.jpg";
import art3 from "../../Assets/art2.jpg";

const MasonrySection = (props) => {
  const split = props.title.split(" ");
  const lastTitle = split.pop();
  const art = [art1, art2, art3, art1, art2, art3];

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
          <Masonry columns={4} spacing={5}>
            {art.map((art, index) => (
              <MasonryItem
                key={index}
                image={art}
                name={"One"}
                artist={"Furba Tamang"}
                height={index === 0 || index === 2 ? 810 : 350}
                like={99}
                delay={index}
              />
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default MasonrySection;
