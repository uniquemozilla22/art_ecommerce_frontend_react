import React from "react";
import classes from "./ProductDescription.module.css";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";

const ProductDescription = ({ description, additionalInformation }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.description__container}>
      <TabContext value={value}>
        <div>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className={classes.tabContext}
            textColor="inherit"
          >
            <Tab label="Description" value="1" />
            <Tab label="Additional Information" value="2" />
          </TabList>
        </div>
        <TabPanel value="1">{description}</TabPanel>
        <TabPanel value="2">{additionalInformation}</TabPanel>
      </TabContext>
    </div>
  );
};

export default ProductDescription;
