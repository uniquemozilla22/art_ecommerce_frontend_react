import React from "react";
import CopyrightBanner from "./CopyrightBanner/CopyrightBanner";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import DetailsContainer from "./DetailsContainer/DetailsContainer";
import classes from "./Footer.module.css";
import Links from "./Links/Links";
import Main from "./Main/Main";
import Payment from "./Payment/Payment";

const Footer = ({ data }) => {
  return (
    <>
      <Main data={data} />
      <Payment />
      <CopyrightBanner />
    </>
  );
};

export default Footer;
