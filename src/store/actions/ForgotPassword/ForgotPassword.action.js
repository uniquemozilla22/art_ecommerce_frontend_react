import axiosBase from "../../../axiosBase";

const ForgotPasswordAction = (payload) => {
    
};

const postPassword = (payload) => {
  return axiosBase.get(`users/resetPassword/${payload.id}/${payload.token}`);
};

export default ForgotPasswordAction;
