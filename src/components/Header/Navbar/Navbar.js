import React from "react";
import ActionIcons from "./ActionIcons/ActionIcons";
import Logo from "./Logo/Logo";
import classes from "./Navbar.module.css";
import Search from "./Search/Search";

const Navbar = (props) => {
  return (
    <div className={"container-fluid " + classes.navigation__container}>
      <Logo image={props.logo} alt={props.name}></Logo>
      <Search />
      <ActionIcons />
    </div>
  );
};
export default Navbar;
