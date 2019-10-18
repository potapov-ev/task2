import {createStore} from "redux";
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" 

//import items from "./constants";


const initialState = {
  items: [],
  itemsId: [], // id товаров, находящихся в корзине
  price: 0,
  numbers: [],
};

const ITEMS = "ITEMS";
const ITEM_TO_CART = "ITEM_TO_CART";
const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";
const CHANGE_PRICE = "CHANGE_PRICE";
const SET_NUMBERS = "SET_NUMBERS";
const CHANGE_NUMBER = "CHANGE_NUMBER"; // Изменить кол-во товара в корзине

function reducer(state = initialState, action) {
  switch (action.type) {
    case ITEMS:
      return { ...state, items: action.value };

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

    case CHANGE_NUMBER:  // action.value - индекс
      return {...state, numbers: state.numbers.map( (number, index) => {
        if (action.value[1] === index) {
          return action.value[0];
        }
        return number;
      })};
          
    default:
      return state;
  }
}

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
