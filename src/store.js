import {createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const initialState = {
  items: [],
  itemsId: [], // id товаров, находящихся в корзине
  price: 0,
  numbers: [],
};

const ADD_ITEMS = "ADD_ITEMS";
const ITEM_TO_CART = "ITEM_TO_CART";
const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";
const CHANGE_PRICE = "CHANGE_PRICE";

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEMS:
      return { ...state, items: action.value };

    case ITEM_TO_CART:
      return {...state, itemsId: [...state.itemsId, action.value]};  

    case DELETE_ITEM_FROM_CART:
      let index = state.itemsId.indexOf(action.value);
      return {...state, itemsId: [...state.itemsId.slice(0, index),
        ...state.itemsId.slice(index + 1, state.itemsId.length )]};

    case CHANGE_PRICE:  
      return {...state, price: state.price + parseFloat(action.value)};
          
    default:
      return state;
  }
}

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);