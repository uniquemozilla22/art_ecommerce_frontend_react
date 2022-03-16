import React, { useState, useEffect } from "react";
import classes from "./ProductGrid.module.css";
import { Fade } from "react-reveal";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import fetchLikedProducts from "../../store/actions/Authentication/LikedProducts/likedProducts.fetch";
import DataNotFound from "../DataNotFound/DataNotFound";
const ProductGrid = ({ arts }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   myLikedProducts();
  // }, []);

  const myLikedProducts = async () => {
    if (arts) {
      let likedproducts = await dispatch(await fetchLikedProducts());
      setData(likedproducts);
    }
  };
  return (
    <Fade cascade>
      <div className={classes.product__grid__container}>
        {console.log(data)}
        {data.length !== 0 ? (
          data.map((product, index) => {
            return product.time ? (
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
            ) : (
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <ProductCard
                  name={product.name}
                  id={product.id}
                  image={product.image}
                  price={product.price}
                  delay={index}
                />
              </div>
            );
          })
        ) : (
          <DataNotFound
            action={() => myLikedProducts()}
            content={
              "Liked products not found. Try giving Likes to the products."
            }
          />
        )}
      </div>
    </Fade>
  );
};

export default ProductGrid;
