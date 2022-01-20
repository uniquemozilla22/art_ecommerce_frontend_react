import React, { useState, useEffect } from "react";
import classes from "./CartModal.module.css";
import { Offcanvas } from "react-bootstrap";
import CartModalBody from "../CartModalBody/CartModalBody";

const CartModal = (props) => {
  const [cartShow, setCartShow] = useState(props.show);

  const handleCart = () => {
    setCartShow(false);
    props.toggleCart();
  };

  useEffect(() => {
    setCartShow(props.show);
  }, [props.show]);
  return (
    <Offcanvas
      show={cartShow}
      onHide={() => handleCart()}
      placement="end"
      className={classes.cartModal}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className={classes.headerTitle}>Cart.</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={classes.offcanvas_Body}>
        <CartModalBody
          data={props.data.cartItems}
          removeItem={props.removeCartItem}
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartModal;
