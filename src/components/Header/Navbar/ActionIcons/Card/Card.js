import { Avatar, Badge, styled } from "@mui/material";
import React from "react";
import classes from "./Card.module.css";

const CardBalance = ({ balance, email, username, image }) => {
  return (
    <>
      <div className={classes.balance__container}>
        <div className={classes.avatar}>
          <div>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                sx={{ height: 30, width: 30 }}
                alt="Remy Sharp"
                src={image ? image : null}
              >
                {username?.charAt(0).toUpperCase() ||
                  email?.charAt(0).toUpperCase()}
              </Avatar>
            </StyledBadge>
          </div>
          {email ? (
            <div className={classes.content__container}>
              <p>
                <span>
                  {parseInt(balance).toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "NRS",
                  })}
                </span>
              </p>
              <p> @{email?.split("@")[0]}</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default CardBalance;
