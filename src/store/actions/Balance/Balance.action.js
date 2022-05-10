import { ADD_BALANCE, DEDUCT_BALANCE } from "../Types/Types";

export const deductBalance = (amount) => {
  return {
    type: DEDUCT_BALANCE,
    payload: amount,
  };
};

export const addBalance = (amount) => {
  return {
    type: ADD_BALANCE,
    payload: amount,
  };
};
