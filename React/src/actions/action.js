import Strapi from "strapi-sdk-javascript/build/main";


export function itemsGetData(url) {
  return async (dispatch, getState) => {
    if(getState().fetchItems.loading === false) { 
      return;
    }   

    const loading = false;
    try {
      const strapi = new Strapi("http://localhost:1337");
      const items = await strapi.getEntries(url);
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