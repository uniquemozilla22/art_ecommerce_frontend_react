import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import UserReducer from "./UserReducer";
import ModalReducer from "./ModalReducer";
import CartReducer from "./CartReducer";
import MessageReducer from "./MessageReducer";

const reducers = combineReducers({
  user: UserReducer,
  modal: ModalReducer,
  cartContent: CartReducer,
  message: MessageReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["cartContent", "message"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
