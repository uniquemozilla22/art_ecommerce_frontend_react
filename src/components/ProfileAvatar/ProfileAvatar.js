import React from "react";
import classes from "./ProfileAvatar.module.css";
import FeatherIcon from "feather-icons-react";
import { Avatar, Tooltip } from "@mui/material";
import { WarningAmberOutlined } from "@mui/icons-material";

const ProfileAvatar = ({ name, image, verified, balance }) => {
  return (
    <div className={classes.profile__avatar__container}>
      {image ? (
        <img src={image} alt={`${name}'s Profile`} />
      ) : (
        <Avatar sx={{ width: "200px", height: "200px", fontSize: "3rem" }}>
          {name.split(" ")[0].charAt(0) + name.split(" ")[1].charAt(0)}
        </Avatar>
      )}
      <div className={classes.content}>
        <h1>{name}</h1>
        {verified ? (
          <Tooltip title="Verified">
            <FeatherIcon icon="check" className={classes.icon} />
          </Tooltip>
        ) : (
          <Tooltip title="Not Verified">
            <WarningAmberOutlined className={classes.icon_not_verfified} />
          </Tooltip>
        )}
      </div>
      <div className={classes.credit__container}>
        <p>Balance</p>
        <span>
          {balance
            ? parseInt(balance).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                style: "currency",
                currency: "NRS",
              })
            : "NRS 0.00"}
        </span>
      </div>
    </div>
  );
};

export default ProfileAvatar;
