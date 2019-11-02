const initialState = {
  items: [],
};

const FETCH_ITEMS = "FETCH_ITEMS";

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.value };

    default:
      return state;
  }
}

export default itemsReducer;