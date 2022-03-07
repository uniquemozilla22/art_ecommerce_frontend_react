import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import UserReducer from "./User.reducer";
import ModalReducer from "./Modal.reducer";
import CartReducer from "./Cart.reducer";
import MessageReducer from "./Message.reducer";
import LoaderReducer from "./Loading.reducer";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "cookies-js";
import ProductReducer from "./Product.reducer";

const reducers = combineReducers({
  user: UserReducer,
  modal: ModalReducer,
  cartContent: CartReducer,
  message: MessageReducer,
  loader: LoaderReducer,
  products: ProductReducer,
});

const persistConfig = {
  key: "root",
  storage: new CookieStorage(Cookies),
  whitelist: ["user", "cartContent"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
