import React from "react";
import CustomerSupport from "../CustomerSupport/CustomerSupport";
import DetailsContainer from "../DetailsContainer/DetailsContainer";
import classes from "./Main.module.css";
import Links from "../Links/Links";
const Main = ({ data }) => {
  return (
    <>
      <div className={classes.footer__container}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-6 d-none d-lg-block">
              <DetailsContainer
                logo={data.logo}
                name={data.name}
                contactNumber={data.contactNumber}
                address={data.address}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-6">
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
            <div className="col-lg-3 col-md-6 col-6">
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
            <div className="col-lg-3 col-md-6 col-6 d-none d-lg-block">
              <CustomerSupport
                contactNumber={data.contactNumber}
                emails={data.email}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
