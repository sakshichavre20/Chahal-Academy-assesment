import AsyncStorage from "@react-native-async-storage/async-storage";
import authReducer from "./reducer";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
