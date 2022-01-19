import React, { useState, useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import { connect } from "react-redux";
import removeCartItem from "../../../store/actions/Cart/RemoveItem";
import { REMOVE_CART } from "../../../store/actions/Types/Types";
import ActionIcons from "./ActionIcons/ActionIcons";
import CartModalBody from "./CartModalBody/CartModalBody";
import Logo from "./Logo/Logo";
import classes from "./Navbar.module.css";
import Search from "./Search/Search";

const Navbar = (props) => {
  const [cartShow, setCartShow] = useState(props.modal.cart);

  const handleCart = () => {
    setCartShow(false);
    props.toggleCart();
  };

  useEffect(() => {
    setCartShow(props.modal.cart);
  }, [props.modal.cart]);

  return (
    <div className={"container-fluid " + classes.navigation__container}>
      <Logo
        image={props.logo}
        alt={props.name}
        toogleCategory={props.toggleCategories}
      ></Logo>
      <Search />
      <ActionIcons {...props} />
      <Offcanvas
        show={cartShow}
        onHide={() => handleCart()}
        placement="end"
        className={classes.cartModal}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={classes.headerTitle}>
            Cart.
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={classes.offcanvas_Body}>
          <CartModalBody
            data={props.cart.cartItems}
            removeItem={props.removeCartItem}
          />
        </Offcanvas.Body>
      </Offcanvas>
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
    removeCartItem: (id) => dispatch(removeCartItem({ id })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
