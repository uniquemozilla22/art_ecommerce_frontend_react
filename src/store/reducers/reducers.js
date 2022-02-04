import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import UserReducer from "./UserReducer";
import ModalReducer from "./ModalReducer";
import CartReducer from "./CartReducer";
import MessageReducer from "./MessageReducer";
import LoaderReducer from "./LoadingReducer";

const reducers = combineReducers({
  user: UserReducer,
  modal: ModalReducer,
  cartContent: CartReducer,
  message: MessageReducer,
  loader: LoaderReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["cartContent", "message", "loader"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
