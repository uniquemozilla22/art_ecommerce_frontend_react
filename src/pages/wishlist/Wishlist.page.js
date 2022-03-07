import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductTable from "../../components/ProductTable/ProductTable";
import WishlistData from "../../store/actions/products/wishlist.fetch";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();
  const [data, setData] = useState(wishlist);

  useEffect(() => {
    setData(wishlist);
  }, [wishlist]);

  useEffect(() => {
    getWishList();
  }, []);

  const getWishList = () => dispatch(WishlistData());

  return (
    <>
      <ProductTable
        removeFunction={(id) => console.log(id)}
        items={data}
        wishlist
        refresh={getWishList}
      />
    </>
  );
};

export default Wishlist;
