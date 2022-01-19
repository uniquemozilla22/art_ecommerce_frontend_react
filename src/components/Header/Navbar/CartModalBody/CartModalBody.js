import React from "react";
import ProductFeild from "../../../../ProductFeild/ProductFeild";
import removeCartItem from "../../../../store/actions/Cart/RemoveItem";
import art1 from "./../../../../Assets/art1.jpg";
import art2 from "./../../../../Assets/art2.jpg";
import art3 from "./../../../../Assets/art3.jpg";
import classes from "./CartModalBody.module.css";

const CartModalBody = (props) => {
  return (
    <div className={classes.cart__body__container}>
      {props.data.map((cartitem) => (
        <ProductFeild
          key={cartitem.id}
          title={cartitem.name}
          price={cartitem.price}
          description={cartitem.description}
          image={cartitem.image}
          remove={() => props.removeItem(cartitem.id)}
        />
      ))}

      <div className={classes.cart__footer}>
        <div className={classes.cart__totalContent}>
          <h4>Grand Total</h4>
          <h2>NPR.35000 /-</h2>
        </div>
        <div className={classes.checkoutButton}>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartModalBody;
