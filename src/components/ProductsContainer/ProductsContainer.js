import React from "react";
import { Form } from "react-bootstrap";
import ProductCard from "../BiddingCard/BiddingCard";
import classes from "./ProductsContainer.module.css";
import art1 from "../../Assets/art1.jpg";
import art2 from "../../Assets/art2.jpg";
import art3 from "../../Assets/art3.jpg";
import FeatherIcon from "feather-icons-react";

const ProductsContainer = ({ filterHandler }) => {
  return (
    <div className={classes.products__grid__container}>
      <div className={classes.sorting__place__container}>
        <div className={classes.sort__container}>
          <div>
            <FeatherIcon
              icon={"filter"}
              onClick={(e) => filterHandler()}
              className={"d-md-none " + classes.filter__icon}
            />
          </div>

          <div className={classes.sort}>
            <p>Sort</p>
            <Form.Select size="sm" className={classes.sort__selection}>
              <option>Small select</option>
              <option>Small select Option</option>
              <option>Small select</option>
              <option>Small select</option>
            </Form.Select>
          </div>
        </div>
      </div>

      <div className={classes.resulting__products__container}>
        <div className="row">
          <div className={"col-lg-3 col-md-4 col-xs-6 col-6"}>
            <ProductCard
              id={1}
              image={art2}
              name={"One"}
              price={3000}
              delay={1}
            />
          </div>
          <div className={"col-lg-3 col-md-4 col-xs-6 col-6"}>
            <ProductCard
              id={2}
              image={art1}
              name={"One"}
              price={3000}
              delay={1}
            />
          </div>
          <div className={"col-lg-3 col-md-4 col-xs-6 col-6"}>
            <ProductCard
              id={3}
              image={art3}
              name={"One"}
              price={3000}
              delay={1}
            />
          </div>
          <div className={"col-lg-3 col-md-4 col-xs-6 col-6"}>
            <ProductCard
              id={4}
              image={art2}
              name={"One"}
              price={3000}
              delay={1}
            />
          </div>
          <div className={"col-lg-3 col-md-4 col-xs-6 col-6"}>
            <ProductCard
              id={5}
              image={art1}
              name={"One"}
              price={3000}
              delay={1}
            />
          </div>
          <div className={"col-lg-3 col-md-4 col-xs-6 col-6"}>
            <ProductCard
              id={6}
              image={art3}
              name={"One"}
              price={3000}
              delay={1}
            />
          </div>
          <div className={"col-lg-3 col-md-4 col-xs-6 col-6"}>
            <ProductCard
              id={7}
              image={art1}
              name={"One"}
              price={3000}
              delay={1}
            />
          </div>
          <div className={"col-lg-3 col-md-4 col-xs-6 col-6"}>
            <ProductCard
              id={8}
              image={art2}
              name={"One"}
              price={3000}
              delay={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
