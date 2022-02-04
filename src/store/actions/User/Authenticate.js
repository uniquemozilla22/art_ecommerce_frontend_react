import { USER_LOGIN, USER_REGISTER } from "../Types/Types";

export const RegisterAuthentication = (payload) => {
  return {
    type: USER_REGISTER,
    payload,
  };
};
export const LoginAuthentication = (payload) => {
  return {
    type: USER_LOGIN,
    payload,
  };
};
