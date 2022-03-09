import React, { useEffect, useState, lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import WishlistData from "../../store/actions/Wishlist/wishlist.fetch";
import DeleteWishlist from "./../../store/actions/Wishlist/wishlist.delete";

const ProductTable = lazy(() =>
  import("../../components/ProductTable/ProductTable")
);

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
      <Suspense fallback={<Spinner />}>
        <ProductTable
          removeFunction={(id) => dispatch(DeleteWishlist(id))}
          items={data}
          wishlist
          refresh={getWishList}
        />
      </Suspense>
    </>
  );
};

export default Wishlist;
