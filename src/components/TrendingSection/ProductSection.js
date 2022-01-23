import React from "react";
import { BiddingCard, ProductCard } from "../BiddingCard/BiddingCard";
import classes from "./ProductSection.module.css";

import { Link } from "react-router-dom";

const TrendingAution = ({ title, products }) => {
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
            {products.map((product) => {
              return product.time ? (
                <div className="col">
                  <BiddingCard
                    name={product.name}
                    id={product.id}
                    image={product.image}
                    currentPrice={product.price}
                    time={product.time}
                  />{" "}
                </div>
              ) : (
                <div className="col">
                  <ProductCard
                    name={product.name}
                    id={product.id}
                    image={product.image}
                    price={product.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingAution;
