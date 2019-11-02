const initialState = {
  categories: [],
};

const FETCH_CATEGORIES = "FETCH_CATEGORIES";

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, categories: action.value };  

    default:
      return state;
  }
}

export default categoriesReducer;