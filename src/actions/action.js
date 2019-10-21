import axios from "axios";


export function itemsFetchData(url) {
  return async (dispatch, getState) => {
    // Если данные уже загружены не нужно загружать повторно
    if(getState().fetchItems.loading === false) { 
      return;
    }
    const loading = false;
    try {
      const { data } = await axios.get(url);
      const items = data["products"];
      let numbers = new Array(items.length); // Кол-во единиц одного товара в корзине
      for (let i = 0; i < numbers.length; ++i) {
        numbers[i] = 1;
      }
      dispatch({type: "SET_NUMBERS", value: numbers});
      const error = null;
      dispatch({type: "FETCH_ITEMS", value: {loading, error, items}});
    } catch (exception) {
      dispatch({type: "FETCH_ITEMS", value: {loading, error: exception.message, items: []}});
    }
  };
}
