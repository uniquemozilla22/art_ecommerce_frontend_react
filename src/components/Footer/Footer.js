import { DateRange } from "@mui/icons-material";
import React from "react";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import DetailsContainer from "./DetailsContainer/DetailsContainer";
import classes from "./Footer.module.css";
import Links from "./Links/Links";

const Footer = ({ data }) => {
  return (
    <div className={classes.footer__container}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <DetailsContainer
              logo={data.logo}
              name={data.name}
              contactNumber={data.contactNumber}
              address={data.address}
            />
          </div>
          <div className="col-lg-3">
            <Links
              title="Arneli"
              links={[
                "Careers",
                "Blog",
                "Terms and Conditions",
                "Privacy Policies",
                "Digital Payment",
                "About Us",
              ]}
            ></Links>
          </div>
          <div className="col-lg-3">
            <Links
              title="Customer Care"
              links={[
                "Help Center",
                "How to Buy",
                "Returns and Refunds",
                "Privacy Policies",
                "Contact Us",
              ]}
            ></Links>
          </div>
          <div className="col-lg-3">
            <CustomerSupport
              contactNumber={data.contactNumber}
              emails={["guide@artgallery.com", "support@artgallery.com"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
