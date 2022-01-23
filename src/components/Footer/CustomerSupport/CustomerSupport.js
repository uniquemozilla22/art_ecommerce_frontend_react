import { Call, Mail, Timer } from "@mui/icons-material";
import React from "react";
import classes from "./CustomerSupport.module.css";

const CustomerSupport = ({ contactNumber, emails }) => {
  return (
    <div className={classes.customer__support}>
      <h2 className={classes.customer__support__title}>Customer Support</h2>
      <div className={classes.supportItem}>
        <Call className={classes.icon}></Call>
        <span>
          <a href={`tel:${contactNumber}`}>Call Us: {contactNumber}</a>
        </span>
      </div>
      <div className={classes.supportItem}>
        <Mail className={classes.icon}></Mail>
        <span>
          {emails.map((email) => (
            <a key={email} href={`mailto:${email}`}>
              {email}
            </a>
          ))}
        </span>
      </div>
      <h2 className={classes.customer__support__subtitle}>Customer Support</h2>

      <div className={classes.supportItem}>
        <Timer className={classes.icon}></Timer>
        <span>
          <p>Monday - Friday</p>
          <p>8AM - 8PM</p>
        </span>
      </div>
    </div>
  );
};

export default CustomerSupport;
