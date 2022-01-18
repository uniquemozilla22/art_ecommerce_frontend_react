import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import ModalReducer from "./ModalReducer";

const reducers = combineReducers({
  user: UserReducer,
  modal: ModalReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
