import axiosBase from "../../../../axiosBase";
import { ErrorMessage } from "../../Message/Message";

const LoginAction = (payload) => {
  const { email, password } = payload;

  return (dispatch) => {
    return loginToTheSystem(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        dispatch(ErrorMessage({ message: err.response.statusText }));
      });
  };
};

const loginToTheSystem = (email, password) => {
  return axiosBase.post("/auth/login", { email, password });
};

export default LoginAction;
