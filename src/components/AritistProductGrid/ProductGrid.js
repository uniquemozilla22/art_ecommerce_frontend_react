import React, { useState, useEffect } from "react";
import classes from "./ProductGrid.module.css";
import { Fade } from "react-reveal";
import { useDispatch } from "react-redux";
import DataNotFound from "../DataNotFound/DataNotFound";
import FetchAllBids from "../../store/actions/Bid/bid.fetch";
import AddWishlistItem from "../../store/actions/Wishlist/wishlistItem.post";
import fetchLikedProducts from "../../store/actions/Authentication/LikedProducts/likedProducts.fetch";
import ProductItem from "../ProductTable/ProductItem/ProductItem";
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
        let likedproducts = await dispatch(fetchLikedProducts());
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
        {data.length !== 0 ? (
          data.map((product, index) => {
            return (
              <ProductItem
                key={index}
                id={product?.data?.id}
                image={product?.data?.image_url}
                name={product?.data?.name}
                price={product?.data?.unit_price}
                supplierName={
                  product?.supplierInfo?.first_name +
                  " " +
                  product?.supplierInfo?.last_name
                }
                supplierInfo={product?.supplierInfo}
                productData={product?.data}
                tags={product?.tags}
                category={product?.category}
                description={product?.data?.description}
                wishlist
                wishlistFunction={() => {
                  dispatch(AddWishlistItem(product?.data?.id));
                }}
                likesCount={product?.likesCount}
                time={product?.auction?.expiration_date || null}
                heading
              />
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
