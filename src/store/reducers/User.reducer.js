import {
  DEDUCT_BALANCE,
  FETCH_EDIT_PROFILE,
  LOGIN_MODAL,
  TOOGLE_LIKE_ON_PRODUCT,
  UPDATE__PROFILE,
  USER_LOGOUT,
  USER_REGISTER,
} from "../actions/Types/Types";

const initialState = {
  email: null,
  username: null,
  token: null,
  likes: [],
  otherData: {},
  balance: 999999,
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
        likes: payload.likes,
        balance: payload.balance,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        email: null,
        username: null,
        token: null,
        likes: [],
        otherData: {},
        balance: 0,
      };
    }

    case UPDATE__PROFILE: {
      return {
        ...state,
        otherData: {
          ...state.otherData,
          ...payload,
        },
      };
    }

    case DEDUCT_BALANCE: {
      const deductedPrice = state.balance - payload;
      return { ...state, balance: deductedPrice };
    }
    case TOOGLE_LIKE_ON_PRODUCT: {
      if (state.likes.includes(payload)) {
        let updatedLike = removeLike(state.likes, payload);
        return { ...state, likes: updatedLike };
      } else {
        let updatedLike = addLike(state.likes, payload);
        return { ...state, likes: updatedLike };
      }
    }

    default:
      return state;
  }
};

const removeLike = (likes, id) => {
  const filteredItems = likes.filter((item) => item !== id);
  return filteredItems;
};

const addLike = (likes, id) => {
  likes.push(id);
  return likes;
};

export default UserReducer;
