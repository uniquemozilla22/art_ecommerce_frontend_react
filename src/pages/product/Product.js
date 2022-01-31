import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import classes from "./Product.module.css";

const Product = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleFilter = () => setIsFilterActive(!isFilterActive);

  return (
    <>
      <div className={classes.product__container}>
        <div className={"container-fluid"}>
          <div className={classes.product__title}>
            <h1>Category.</h1>
          </div>
          <div className="row">
            <div className="col-2 d-none d-md-block">
              <ProductFilter />
            </div>
            <div className="col-12 col-md-10">
              <ProductsContainer filterHandler={handleFilter} />
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={isFilterActive} onHide={handleFilter}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ProductFilter />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Product;
