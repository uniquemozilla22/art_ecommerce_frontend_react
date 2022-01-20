import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import ModalReducer from "./ModalReducer";
import CartReducer from "./CartReducer";

const reducers = combineReducers({
  user: UserReducer,
  modal: ModalReducer,
  cartContent: CartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["cartContent"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
