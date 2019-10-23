import {createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const initialState = {
  fetchItems: {
    loading: true,
    error: null,
    items: [],
  },
  itemsId: [], // id товаров, находящихся в корзине
  price: 0, // суммарная цена за все товары в корзине
  numbers: [], // Кол-во единиц одного товара в корзине
  fetchUserData: {
    loading: true,
    error: null,
    userData: {},
  }
};

const FETCH_ITEMS = "FETCH_ITEMS";
const ITEM_TO_CART = "ITEM_TO_CART";
const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";
const CHANGE_PRICE = "CHANGE_PRICE";
const SET_NUMBERS = "SET_NUMBERS";
const CHANGE_NUMBER = "CHANGE_NUMBER";
const FIND_USER = "FIND_USER";

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, fetchItems: action.value };

    case ITEM_TO_CART:
      return {...state, itemsId: [...state.itemsId, action.value]};  

    case DELETE_ITEM_FROM_CART:
      let index = state.itemsId.indexOf(action.value);
      return {...state, itemsId: [...state.itemsId.slice(0, index),
        ...state.itemsId.slice(index + 1, state.itemsId.length )]};

    case CHANGE_PRICE:  
      return {...state, price: state.price + parseFloat(action.value)};

    case SET_NUMBERS:
      return {...state, numbers: action.value};

    case CHANGE_NUMBER:
      const temp = state.numbers.map( (number, index) => {
        if (index === action.value.index) {
          return action.value.number;
        } else {
          return number;
        }
      })
      return {...state, numbers: temp};
          
    case FIND_USER:
      return {...state, fetchUserData: action.value};

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