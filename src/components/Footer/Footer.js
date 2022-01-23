import React from "react";
import CopyrightBanner from "./CopyrightBanner/CopyrightBanner";
import Main from "./Main/Main";
import Payment from "./Payment/Payment";
import classes from "./Footer.module.css";

const Footer = ({ data }) => {
  return (
    <div className={classes.footer}>
      <Main data={data} />
      <Payment />
      <CopyrightBanner />
    </div>
  );
};

export default Footer;
