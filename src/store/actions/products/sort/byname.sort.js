const SortProductsByName = () => {
  return (dispatch, getState) => {
    let data = getState().products.all;
    data = data.sort((a, b) =>
      a.data.name > b.data.name ? 1 : b.data.name > a.data.name ? -1 : 0
    );

    console.log(data);
  };
};

const SortCategoriesByName = ({ type }) => {};

export default SortProductsByName;
