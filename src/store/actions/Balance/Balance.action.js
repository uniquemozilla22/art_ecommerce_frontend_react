import { DEDUCT_BALANCE } from "../Types/Types";

const deductBalance = (amount) => {
  return {
    type: DEDUCT_BALANCE,
    payload: amount,
  };
};

export default deductBalance;
