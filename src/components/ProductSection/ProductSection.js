import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductSection.module.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const ProductSection = ({ title, products }) => {
  const split = title.split(" ");
  const lastName = split.pop();

  return (
    products.length !== 0 && (
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
              {products.map((product, index) => {
                return (
                  <Fade cascade key={index}>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6">
                      <ProductCard
                        key={index}
                        id={product.data.id}
                        productData={product.data}
                        supplier={product.supplierInfo}
                        time={product.auction?.expiration_date}
                        auction={product.auction ? product.auction : null}
                        category={product.category}
                        delay={index}
                        currentBid={product.currentBid}
                        likes={product.likesCount}
                        tags={product.tags}
                      />
                    </div>
                  </Fade>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductSection;
