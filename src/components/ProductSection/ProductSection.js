import React from "react";
import ProductCard from "../BiddingCard/BiddingCard";
import classes from "./ProductSection.module.css";
import Fade from "react-reveal/Fade";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";

const ProductSection = ({ title, products }) => {
  const split = title.split(" ");
  const lastName = split.pop();

  return (
    <div className={classes.trendingAuction}>
      <div className="container-fluid">
        <div className={classes.title__container}>
          <h1 className={classes.headerTitle}>
            {split}
            <span>{" " + lastName}</span>
          </h1>
          <Link to="./">See More</Link>
        </div>
        <div
          className={"container-fluid" + classes.trending__auction__container}
        >
          <div className="row">
            <Fade cascade>
              {products.map((product, index) => {
                return product.time ? (
                  <div className="col">
                    <ProductCard
                      name={product.name}
                      id={product.id}
                      image={product.image}
                      price={product.price}
                      time={product.time}
                      delay={index}
                    />
                  </div>
                ) : (
                  <div className="col">
                    <ProductCard
                      name={product.name}
                      id={product.id}
                      image={product.image}
                      price={product.price}
                      delay={index}
                    />
                  </div>
                );
              })}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
