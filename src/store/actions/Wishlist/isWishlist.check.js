const isWishlist = (id) => {
  return (dispatch, getState) => {
    const wishlist = getState().wishlist.wishlistItems;
    let index = wishlist.findIndex((item) => {
      return item.data.id === id;
    });
    if (index !== -1) return true;
    else return false;
  };
};

export default isWishlist;
