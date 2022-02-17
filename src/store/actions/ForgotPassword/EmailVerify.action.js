import axiosBase from "../../../axiosBase";
import { ErrorMessage, SuccessMessage } from "../Message/Message";

const EmailVerify = (payload) => {
  return (dispatch) => {
    verifyemail(payload)
      .then((res) => {
        dispatch(SuccessMessage({ message: res.data.message }));
      })
      .catch((err) => {
        console.log({ ...err });
        if (err.response === undefined) {
          dispatch(
            ErrorMessage({
              message: "No Internet Connect!! Please Refresh First",
            })
          );
        }

        if (err.response.status === 500) {
          dispatch(
            ErrorMessage({
              message: err.response.data.message,
            })
          );
        }
      });
  };
};

const verifyemail = (payload) => {
  return axiosBase.get(`users/resetPassword/${payload.id}/${payload.token}`);
};

export default EmailVerify;
