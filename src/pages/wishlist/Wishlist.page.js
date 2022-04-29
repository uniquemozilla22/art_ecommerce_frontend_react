import React, { useEffect, lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import WishlistData from "../../store/actions/Wishlist/wishlist.fetch";
import DeleteWishlist from "./../../store/actions/Wishlist/wishlist.delete";

const ProductTable = lazy(() =>
  import("../../components/ProductTable/ProductTable")
);

const Wishlist = (props) => {
  useEffect(() => {
    props.getWishList();
  }, []);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <ProductTable
          removeFunction={(id) => props.deleteWishList(id)}
          items={props.wishlistItems}
          wishlist
          refresh={props.getWishList}
          heading
        />
      </Suspense>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.wishlist,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWishList: () => dispatch(WishlistData()),
    deleteWishList: (id) => dispatch(DeleteWishlist(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
