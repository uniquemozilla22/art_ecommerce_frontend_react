import axiosBase from "../../../axiosBase";

const FetchCategories = () => {
  return async (dispatch, getState) => {};
};

const fetchCategories = () => {
  return axiosBase.get("categories");
};

export default FetchCategories;
