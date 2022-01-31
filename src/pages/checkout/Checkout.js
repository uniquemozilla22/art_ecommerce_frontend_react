import React from "react";
import { connect } from "react-redux";
import ProductTable from "../../components/ProductTable/ProductTable";
import classes from "./Checkout.module.css";
import removeCartItem from "../../store/actions/Cart/RemoveItem";
import CheckoutInformation from "../../components/CheckoutInformation/CheckoutInformation";

const Checkout = (props) => {
  return (
    <div className={classes.checkout__page}>
      <div className="container-fluid">
        <div className={classes.header__title}>
          <h1>Checkout.</h1>
        </div>
        <div className="row">
          <div className={"col-lg-8 col-md-8 col-sm-12 col-xs-12"}>
            <ProductTable
              items={props.cartItems}
              removeFunction={props.removeCartItem}
            />
          </div>
          <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12"}>
            <CheckoutInformation />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { ...state.cartContent, ...ownProps };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCartItem: (id) => dispatch(removeCartItem({ id })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
