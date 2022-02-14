import {
  LOGIN_MODAL,
  USER_LOGOUT,
  USER_REGISTER,
} from "../actions/Types/Types";

const initialState = {
  email: null,
  username: null,
  token: null,
};

const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER: {
      return {
        ...state,
        email: payload.email,
        username: payload.username,
        token: payload.token,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        email: null,
        username: null,
        token: null,
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
