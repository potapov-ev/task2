const initialState = {
  itemsId: [], // id товаров, находящихся в корзине
  price: 0, // суммарная цена за все товары в корзине
  numbers: {}, // Кол-во единиц одного товара в корзине
};


const ITEM_TO_CART = "ITEM_TO_CART";
const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";
const CHANGE_PRICE = "CHANGE_PRICE";
const CHANGE_NUMBER = "CHANGE_NUMBER";

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_TO_CART:
      return {...state, itemsId: [...state.itemsId, action.value]};  

    case DELETE_ITEM_FROM_CART:
      let index = state.itemsId.indexOf(action.value);
      return {...state, itemsId: [...state.itemsId.slice(0, index),
        ...state.itemsId.slice(index + 1, state.itemsId.length )]};

    case CHANGE_PRICE:  
      return {...state, price: state.price + parseFloat(action.value)};

    case CHANGE_NUMBER:
      return {...state, numbers: {...state.numbers, [action.value.id]: action.value.number} };

    default:
      return state;
  }
}

export default cartReducer;