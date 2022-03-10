const isLikedByUser = (id) => {
  return (dispatch, getState) => {
    const likes = getState().user.likes;
    let index = likes.findIndex((item) => {
      return item === id;
    });
    if (index !== -1) return true;
    else return false;
  };
};

export default isLikedByUser;
