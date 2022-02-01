import React from "react";
import classes from "./ProfileAvatar.module.css";
import FeatherIcon from "feather-icons-react";

const ProfileAvatar = ({ name, image, verifies }) => {
  return (
    <div className={classes.profile__avatar__container}>
      <img src={image} alt={`${name}'s Profile`} />
      <div className={classes.content}>
        <h1>{name}</h1>
        <FeatherIcon icon="check" className={classes.icon} />
      </div>
    </div>
  );
};

export default ProfileAvatar;
