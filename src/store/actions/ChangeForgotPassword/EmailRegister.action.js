import axiosBase from "../../../axiosBase";
import { ErrorMessage, SuccessMessage } from "../Message/Message";

const EmailRegister = (payload) => {
  return (dispatch) => {
    Registeremail(payload)
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
              message:
                err.response.data.message + "! Please resend the request",
            })
          );
        } else {
          dispatch(
            ErrorMessage({
              message: err.response.data.message,
            })
          );
        }
      });
  };
};

const Registeremail = (payload) => {
  return axiosBase.get(`users/resetPassword/${payload.id}/${payload.token}`);
};

export default EmailRegister;
