import React from "react";
import { Link } from "react-router-dom";
import classes from "./Links.module.css";

const Links = ({ title, links }) => {
  return (
    <div className={classes.footer__links}>
      <h1 className={classes.link__title}>{title}</h1>
      {links.map((link) => (
        <Link to={`./${link}`} className={classes.footer__link}>{link}</Link>
      ))}
    </div>
  );
};

export default Links;
