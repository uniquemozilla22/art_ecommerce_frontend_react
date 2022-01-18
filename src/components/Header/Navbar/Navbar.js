import React from "react";
import { connect } from "react-redux";
import ActionIcons from "./ActionIcons/ActionIcons";
import Logo from "./Logo/Logo";
import classes from "./Navbar.module.css";
import Search from "./Search/Search";

const Navbar = (props) => {
  return (
    <div className={"container-fluid " + classes.navigation__container}>
      <Logo
        image={props.logo}
        alt={props.name}
        toogleCategory={props.toggleCategories}
      ></Logo>
      <Search />
      <ActionIcons {...props} />
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return { ...state, ...ownProps };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleCategories: () => dispatch({ type: "CATEGORY" }),
    toggleCart: () => dispatch({ type: "CART" }),
    toggleProfile: () => dispatch({ type: "PROFILE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
