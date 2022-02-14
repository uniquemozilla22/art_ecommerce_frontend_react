import { combineReducers } from "redux";
import storageSession from "redux-persist/lib/storage/session";
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
  storage: storageSession,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
