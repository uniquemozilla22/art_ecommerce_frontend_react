import React from "react";
import classes from "./ProductGrid.module.css";
import { Fade } from "react-reveal";
import { BiddingCard, ProductCard } from "../BiddingCard/BiddingCard";

const ProductGrid = ({ products }) => {
  return (
    <Fade cascade>
      <div className={classes.product__grid__container}>
        {products.map((product, index) => {
          return product.time ? (
            <div className="col-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <BiddingCard
                name={product.name}
                id={product.id}
                image={product.image}
                currentPrice={product.price}
                time={product.time}
                delay={index}
              />
            </div>
          ) : (
            <div className="col-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
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
      </div>
    </Fade>
  );
};

export default ProductGrid;
