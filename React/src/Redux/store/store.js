import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

import itemsReducer from "../reducers/itemsReducer";
import cartReducer from "../reducers/cartReducer";


const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = {itemsReducer, cartReducer};
const persistedCombinedReducer = persistCombineReducers(persistConfig, rootReducer);

export const store = createStore(persistedCombinedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);