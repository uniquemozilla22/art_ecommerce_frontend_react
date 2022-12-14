import React, { useEffect, useState } from "react";
import { Offcanvas, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import FetchAllProducts from "../../store/actions/products/allproducts.fetch";
import classes from "./Product.module.css";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router";
import ProductsByCategories from "../../store/actions/products/byCategories.fetch";
import { WarningMessage } from "../../store/actions/Message/Message";

const Category = (props) => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const handleFilter = () => setIsFilterActive(!isFilterActive);
  const [products, setProducts] = useState(props.products.category);
  const params = useParams();
  const dispatch = useDispatch();
  const { id } = params;

  const [filteredProducts, setFilteredProducts] = useState(null);
  useEffect(() => {
    setProducts(props.products.category);
  }, [props.products.category]);

  useEffect(() => {
    fetchProductsByCategories({ id });
  }, [id]);

  const fetchProductsByCategories = (data) => {
    dispatch(ProductsByCategories(data));
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
            <h1>Category.</h1>
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
                fetchAllProducts={fetchProductsByCategories}
                category
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

export default connect(mapStateToProps)(Category);
