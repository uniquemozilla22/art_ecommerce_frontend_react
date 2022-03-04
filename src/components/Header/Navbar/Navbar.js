import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import removeCartItem from "../../../store/actions/Cart/RemoveItem.post";
import { Logout } from "../../../store/actions/User/Logout";
import ActionIcons from "./ActionIcons/ActionIcons";
import CartModal from "./CartModal/CartModal";
import CartModalBody from "./CartModalBody/CartModalBody";
import Logo from "./Logo/Logo";
import classes from "./Navbar.module.css";
import Search from "./Search/Search";
import SearchModal from "./SearchModal/SearchModal";

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
      <CartModal
        toggleCart={props.toggleCart}
        removeCartItem={props.removeCartItem}
        data={props.cartContent}
        show={props.modal.cart}
      />
      <SearchModal
        toggleSearch={props.toggleSearch}
        show={props.modal.search}
      />
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
    toggleSearch: () => dispatch({ type: "SEARCH" }),
    toggleHelpCenter: () => dispatch({ type: "HELP_CENTER" }),
    removeCartItem: (item) => dispatch(removeCartItem({ id: item.id })),
    Logout: () => {
      dispatch(Logout());
      useNavigate()("/login");
    },
    loginModelToggle: () => dispatch({ type: "LOGIN_MODAL" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
