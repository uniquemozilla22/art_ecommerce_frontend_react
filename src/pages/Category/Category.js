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

const Category = (props) => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const handleFilter = () => setIsFilterActive(!isFilterActive);
  const [products, setProducts] = useState(props.products.category);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(props.products.category);
  }, [props.products.category]);

  useEffect(() => {
    const { id } = params;
    fetchProductsByCategories({ id });
  }, []);

  const fetchProductsByCategories = (data) => {
    dispatch(ProductsByCategories(data));
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
              {products ? <ProductFilter data={products} /> : <Spinner />}
            </div>
            <div className="col-12 col-md-10">
              <ProductsContainer
                filterHandler={handleFilter}
                data={products}
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
          <ProductFilter data={products} />
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
