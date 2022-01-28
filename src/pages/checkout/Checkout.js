import React from "react";
import { connect } from "react-redux";
import ProductTable from "../../components/ProductTable/ProductTable";
import classes from "./Checkout.module.css";
import removeCartItem from "../../store/actions/Cart/RemoveItem";

const Checkout = (props) => {
  return (
    <div className={"checkout__page"}>
      <div className="container-fluid">
        <div className={classes.header__title}>
          <h1>Checkout.</h1>
        </div>
        <div className="row">
          <div className={"col-8"}>
            <ProductTable
              items={props.cartItems}
              removeFunction={props.removeCartItem}
            />
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
