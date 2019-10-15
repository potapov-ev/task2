import {createStore} from 'redux';

import items from './constants';


const initialState = {
  items: items,
  itemsId: [], // id товаров в корзине
};

const ITEMS = 'ITEMS';
const ITEM_TO_CART = 'ITEM_TO_CART';
const DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART';

function reducer(state = initialState, action) { // Спред оператор
  switch (action.type) {
    case ITEMS:
      return Object.assign({}, state, {items: action.value} );

    case ITEM_TO_CART:
      localStorage.itemsId = JSON.stringify([...state.itemsId, action.value]);
      return Object.assign({}, state, {itemsId: JSON.parse(localStorage.itemsId)} );  

    case DELETE_ITEM_FROM_CART:
      let index = state.itemsId.indexOf(action.value);
      if (index !== -1) {
        localStorage.itemsId = JSON.stringify([...state.itemsId.slice(0, index),
          ...state.itemsId.slice(index + 1, state.itemsId.length )]);
        return Object.assign({}, state, {itemsId: JSON.parse(localStorage.itemsId)} );
      }
      return Object.assign({}, state, {itemsId: JSON.parse(localStorage.itemsId)});

    default:
      return Object.assign({}, state, {itemsId: JSON.parse(localStorage.itemsId)});
  }
}

const store = new createStore(reducer); 

export default store;