import React, { useState, useEffect } from "react";
import classes from "./ProductGrid.module.css";
import { Fade } from "react-reveal";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import fetchLikedProducts from "../../store/actions/Authentication/LikedProducts/likedProducts.fetch";
import DataNotFound from "../DataNotFound/DataNotFound";
import FetchAllBids from "../../store/actions/Bid/bid.fetch";
const ProductGrid = ({ arts, bids, products }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    myLikedProducts();
  }, []);

  const myLikedProducts = async () => {
    if (products) {
      setData(products);
    } else {
      if (arts) {
        let likedproducts = await dispatch(await fetchLikedProducts());
        setData(likedproducts);
      }
      if (bids) {
        const fetch = await dispatch(FetchAllBids());
        setData(fetch);
      }
    }
  };

  return (
    <Fade cascade>
      <div className={classes.product__grid__container}>
        {console.log(data)}
        {data.length !== 0 ? (
          data.map((product, index) => {
            return product.time ? (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
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
            ) : (
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
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
            );
          })
        ) : (
          <DataNotFound
            action={() => myLikedProducts()}
            content={"Products not found."}
          />
        )}
      </div>
    </Fade>
  );
};

export default ProductGrid;
