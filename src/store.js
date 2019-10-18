import {createStore} from "redux";
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" 

import items from "./constants";


const numbers = new Array(items.length) /* каждый элемент массива - кол-во 
                                         определенного  товара в корзине */
for (let i = 0; i < numbers.length; ++i) {
  numbers[i] = 1;
}

const initialState = {
  items: items,
  itemsId: [], // id товаров, находящихся в корзине
  price: 0,
  numbers: numbers,
};

const ITEMS = "ITEMS";
const ITEM_TO_CART = "ITEM_TO_CART";
const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";
const CHANGE_PRICE = "CHANGE_PRICE";
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

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
