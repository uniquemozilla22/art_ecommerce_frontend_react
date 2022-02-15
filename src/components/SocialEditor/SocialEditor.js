import classes from "./SocialEditor.module.css";
import React from "react";
import FeatherIcon from "feather-icons-react";

const SocialEditor = ({ data }) => {
  return (
    <div className={classes.detail__modifier}>
      {Object.keys(data).map((key, value) => (
        <>
          <div className={classes.detail} onClick={() => console.log("Link")}>
            <p>
              {key.charAt(0).toUpperCase() + key.slice(1).split("_").join(" ")}
              <FeatherIcon icon="link" size={"15"} className={classes.icon} />
            </p>
            {data[key] === null ? <button>Connect Now</button> : data[key]}
          </div>
        </>
      ))}
    </div>
  );
};

export default SocialEditor;
