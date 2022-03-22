import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProductTable from "../../components/ProductTable/ProductTable";
import classes from "./Checkout.module.css";
import removeCartItem from "../../store/actions/Cart/RemoveItem.post";
import CheckoutInformation from "../../components/CheckoutInformation/CheckoutInformation";
import DataNotFound from "../../components/DataNotFound/DataNotFound";

const Checkout = (props) => {
  const [data, setData] = useState(props.cartItems);
  useEffect(() => {
    setData(props.cartItems);
  }, [props.cartItems]);
  return (
    <div className={classes.checkout__page}>
      <div className="container-fluid">
        <div className={classes.header__title}>
          <h1>Checkout.</h1>
        </div>
        <div className="row">
          <div className={"col-lg-8 col-md-8 col-sm-12 col-xs-12"}>
            {data.length !== 0 ? (
              <ProductTable
                items={data}
                removeFunction={props.removeCartItem}
              />
            ) : (
              <DataNotFound
                content={"No Cart Item Found! Try adding some items to cart"}
              />
            )}
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
