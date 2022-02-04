import axiosBase from "../../../../axiosBase";
import { ErrorMessage } from "../../Message/Message";

const RegisterAction = (payload) => {
  console.log(payload);

  return (dispatch) => {
    return registerUser(payload)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log({ ...err });
        dispatch(ErrorMessage({ message: err.response.statusText }));
      });
  };
};

const registerUser = (data) => {
  return axiosBase.post("customers/create", { ...data });
};

export default RegisterAction;
