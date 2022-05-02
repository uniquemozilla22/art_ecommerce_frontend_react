import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const FetchEditProfiileData = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const res = await new Promise((resolve) =>
        resolve(fetchData(getState().user.token))
      );
      dispatch(hideLoading());
      console.log(res.data);
      const {
        username,
        twitterId,
        email,
        active_status,
        googleId,
        facebookId,
      } = res.data.userData;
      const {
        alternative_no,
        first_name,
        gender,
        last_name,
        middle_name,
        mobile_no,
        telephone_no,
      } = res.data.customerData;

      const { primary_address, secondary_address } = res.data.addressData;

      // return {
      //   email,
      //   username,
      //   otherData: {
      //     active_status,
      //     first_name,
      //     middle_name,
      //     last_name,
      //     mobile_no,
      //     telephone_no,
      //     alternative_no,
      //     gender,
      //     twitterId,
      //     googleId,
      //     facebookId,
      //     primary_address,
      //     secondary_address,
      //   },
      // };

      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log({ ...err });
      dispatch(hideLoading());
      if (err.response === undefined) {
        dispatch(
          ErrorMessage({
            message: "Network Error! Check Your Internet Connection",
          })
        );
      } else {
        if (err.response.status === 401) {
          dispatch(
            ErrorMessage({
              message: "You are not logged in. Login Again",
            })
          );
        } else if (err.response.status === 500) {
          console.log({ ...err });
          dispatch(
            WarningMessage({
              message: "There seems to be an error. Please try Again",
            })
          );
        } else if (err.response.status === 404) {
          console.log({ ...err });
          dispatch(
            WarningMessage({
              message: "Data Not Found",
            })
          );
        }
      }
    }
  };
};

const fetchData = async (token) => {
  return await axiosBase.get("/customers/details", {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
};

export default FetchEditProfiileData;
