import { combineReducers } from "redux";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import UserReducer from "./User.reducer";
import ModalReducer from "./Modal.reducer";
import CartReducer from "./Cart.reducer";
import MessageReducer from "./Message.reducer";
import LoaderReducer from "./Loading.reducer";

const reducers = combineReducers({
  user: UserReducer,
  modal: ModalReducer,
  cartContent: CartReducer,
  message: MessageReducer,
  loader: LoaderReducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
