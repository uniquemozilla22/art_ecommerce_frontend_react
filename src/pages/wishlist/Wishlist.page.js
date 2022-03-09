import React, { useEffect, useState, lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import WishlistData from "../../store/actions/Wishlist/wishlist.fetch";

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
          removeFunction={(id) => console.log(id)}
          items={data}
          wishlist
          refresh={getWishList}
        />
      </Suspense>
    </>
  );
};

export default Wishlist;
