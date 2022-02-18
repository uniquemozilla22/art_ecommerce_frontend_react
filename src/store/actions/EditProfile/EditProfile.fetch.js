import axiosBase from "../../../axiosBase";
import { store } from "../../store";
import { hideLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";
import { FETCH_EDIT_PROFILE } from "../Types/Types";

const FetchEditProfiileData = () => {
  return (dispatch) => {
    const state = store.getState();
    fetchData(state.user.token)
      .then((res) => {
        dispatch(hideLoading());

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

        return dispatch({
          type: FETCH_EDIT_PROFILE,
          payload: {
            email: email,
            username: username,
            otherData: {
              active_status,
              first_name,
              middle_name,
              last_name,
              mobile_no,
              telephone_no,
              alternative_no,
              gender,
              twitterId,
              googleId,
              facebookId,
              primary_address,
              secondary_address,
            },
          },
        });
      })
      .catch((err) => {
        dispatch(hideLoading());
        if (err.response === undefined) {
          dispatch(
            ErrorMessage({
              message: "Network Error! Check Your Internet Connection",
            })
          );
        }
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
        }
      });
  };
};

const fetchData = (token) => {
  return axiosBase.get("/customers/details", {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
};

export default FetchEditProfiileData;
