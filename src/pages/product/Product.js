import React, { useEffect, useState } from "react";
import { Offcanvas, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import FetchAllProducts from "../../store/actions/products/allproducts.fetch";
import classes from "./Product.module.css";
import { connect } from "react-redux";
import { WarningMessage } from "../../store/actions/Message/Message";
import { useLocation } from "react-router-dom";
import SearchProducts from "../../store/actions/Search/SearchProducts.fetch";

const Product = (props) => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const handleFilter = () => setIsFilterActive(!isFilterActive);
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    if (location.state) {
      dispatch(SearchProducts(location.state));
    } else {
      const allproducts = await dispatch(FetchAllProducts());
      setProducts(allproducts);
    }
  };

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
              {products ? (
                <ProductsContainer
                  filterHandler={handleFilter}
                  data={filteredProducts || products}
                  fetchAllProducts={fetchAllProducts}
                />
              ) : null}
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

export default Product;
