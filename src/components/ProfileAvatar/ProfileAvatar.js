import React from "react";
import classes from "./ProfileAvatar.module.css";
import FeatherIcon from "feather-icons-react";
import { Avatar, Tooltip } from "@mui/material";
import {
  AddCardOutlined,
  AddCardRounded,
  Security,
  WarningAmberOutlined,
} from "@mui/icons-material";

const ProfileAvatar = ({
  name,
  image,
  verified,
  balance,
  handleShowLoadModal,
}) => {
  const handleonImageChange = (e) => {};
  return (
    <div className={classes.profile__avatar__container}>
      <div className={classes.image__container}>
        {image ? (
          <img src={image} alt={`${name}'s Profile`} />
        ) : (
          <Avatar sx={{ width: "200px", height: "200px", fontSize: "3rem" }}>
            {name.split(" ")[0].charAt(0) + name.split(" ")[1].charAt(0)}
          </Avatar>
        )}
        <div className={classes.upload_image}>
          <input
            type="file"
            hidden
            id="upload-image"
            onChange={handleonImageChange}
            accept=".png, .jpg, .jpeg"
          />
          <label for="upload-image">Upload</label>
        </div>
      </div>
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
        <span>
          {balance
            ? parseInt(balance).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                style: "currency",
                currency: "NRS",
              })
            : "NRS 0.00"}
        </span>
        <div className={classes.quick_icons}>
          <div className={classes.icons} onClick={() => handleShowLoadModal()}>
            <Tooltip title="Load Fund">
              <AddCardRounded fontSize="medium" />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatar;
