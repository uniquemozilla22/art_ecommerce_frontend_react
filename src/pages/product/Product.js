import React, { useEffect, useState } from "react";
import { Offcanvas, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import FetchAllProducts from "../../store/actions/products/allproducts.fetch";
import classes from "./Product.module.css";
import { connect } from "react-redux";
import { WarningMessage } from "../../store/actions/Message/Message";

const Product = (props) => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const handleFilter = () => setIsFilterActive(!isFilterActive);
  const [products, setProducts] = useState(props.products.all);
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    setProducts(props.products.all);
  }, [props.products.all]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = () => dispatch(FetchAllProducts());

  const filterProductbyPrice = (range) => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.data.unit_price >= range[0] &&
          product.data.unit_price <= range[1]
      )
    );

    if (filteredProducts && filteredProducts.length == 0) {
      dispatch(
        WarningMessage({
          message: "No Products are available of that price range.",
        })
      );
    }
  };

  return (
    <>
      <div className={classes.product__container}>
        <div className={"container-fluid"}>
          <div className={classes.product__title}>
            <h1>Product</h1>
          </div>
          <div className="row">
            <div className="col-2 d-none d-md-block">
              {products ? (
                <ProductFilter
                  data={filteredProducts || products}
                  filterProductbyPrice={(range) => filterProductbyPrice(range)}
                />
              ) : (
                <Spinner />
              )}
            </div>
            <div className="col-12 col-md-10">
              <ProductsContainer
                filterHandler={handleFilter}
                data={filteredProducts || products}
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
          <ProductFilter
            data={filteredProducts || products}
            filterProductbyPrice={(range) => filterProductbyPrice(range)}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
    ...ownProps,
  };
};

export default connect(mapStateToProps)(Product);
