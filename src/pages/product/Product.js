import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import FetchAllProducts from "../../store/actions/products/allproducts.fetch";
import classes from "./Product.module.css";
import { connect } from "react-redux";

const Product = (props) => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const handleFilter = () => setIsFilterActive(!isFilterActive);
  const [products, setProducts] = useState(props.products.all);

  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(props.products.all);
  }, [props.products]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = () => dispatch(FetchAllProducts());

  return (
    <>
      <div className={classes.product__container}>
        <div className={"container-fluid"}>
          <div className={classes.product__title}>
            <h1>Products.</h1>
          </div>
          <div className="row">
            <div className="col-2 d-none d-md-block">
              <ProductFilter fetchAllProducts={fetchAllProducts} />
            </div>
            <div className="col-12 col-md-10">
              <ProductsContainer
                filterHandler={handleFilter}
                data={products}
                fetchAllProducts={fetchAllProducts}
              />
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={isFilterActive} onHide={handleFilter}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter.</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ProductFilter />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
    ownProps,
  };
};

export default connect(mapStateToProps)(Product);
