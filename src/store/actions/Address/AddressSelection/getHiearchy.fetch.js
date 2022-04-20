import axiosBase from "../../../../axiosBase";
import { hideLoading, showLoading } from "../../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../../Message/Message";

const getCountries = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading());
      const { data } = await new Promise((resolve) => resolve(fetchCountry()));
      dispatch(hideLoading());

      return data;
    } catch (err) {
      errorHandle(dispatch, err);
    }
  };
};

const getState = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading());
      const { data } = await new Promise((resolve) => resolve(fetchState(id)));
      dispatch(hideLoading());
      return data;
    } catch (err) {
      errorHandle(dispatch, err);
    }
  };
};

const getDistrict = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading());
      const { data } = await new Promise((resolve) =>
        resolve(fetchDistrict(id))
      );
      dispatch(hideLoading());
      return data;
    } catch (err) {
      errorHandle(dispatch, err);
    }
  };
};
const getRegion = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading());
      const { data } = await new Promise((resolve) => resolve(fetchRegion(id)));
      dispatch(hideLoading());
      return data;
    } catch (err) {
      errorHandle(dispatch, err);
    }
  };
};

const fetchCountry = async () => {
  return await axiosBase.get("shipping/countryList");
};

const fetchState = async (id) => {
  return await axiosBase.get("shipping/stateList/" + id);
};

const fetchDistrict = async (id) => {
  return await axiosBase.get("/shipping/districtList/" + id);
};

const fetchRegion = async (id) => {
  return await axiosBase.get("shipping/regionList/" + id);
};

const errorHandle = (dispatch, error) => {
  console.log({ ...error });
  dispatch(hideLoading());

  if (error.response === undefined) {
    dispatch(
      ErrorMessage({
        message: "Network Error! Check Your Internet Connection",
      })
    );
  } else {
    if (error.response?.status === 401) {
      dispatch(
        WarningMessage({
          message: error.response.data.message,
        })
      );
    } else {
      dispatch(
        ErrorMessage({
          message: error.response.data.message,
        })
      );
    }
  }
};

export { getCountries, getDistrict, getRegion, getState };
