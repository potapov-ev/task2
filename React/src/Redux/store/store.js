import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

import itemsReducer from "../reducers/itemsReducer";
import cartReducer from "../reducers/cartReducer";


const rootReducer = {
  ...itemsReducer,
  ...cartReducer
};

const persistConfig = {
  key: "root",
  storage,
}

/* const persistedReducer = persistReducer(persistConfig, itemsReducer) */
const persistCombinedReducers = persistCombineReducers(persistConfig, {
  itemsReducer,
  cartReducer
});

const a = combineReducers({
  itemsReducer,
  cartReducer
});

/* export const store = createStore(persistedReducer, applyMiddleware(thunk)); */
export const store = createStore(a, applyMiddleware(thunk));
//export const persistor = persistStore(store);