import Strapi from "strapi-sdk-javascript/build/main";


export function itemsGetData(url) {
  return async (dispatch, getState) => {
    
    const loading = false;
    try {
      const strapi = new Strapi("http://localhost:1337");
      const items = await strapi.getEntries(url);

      if (getState().numbers.length) {
        if (getState().numbers.length === items.length) { 
          return;
        } else {
          dispatch({type: "SET_NUMBERS", value: [...getState().numbers, 1]});
        }
      } else {
        let numbers = new Array(items.length); // Кол-во единиц одного товара в корзине
        for (let i = 0; i < numbers.length; ++i) {
          numbers[i] = 1;
        }
        dispatch({type: "SET_NUMBERS", value: numbers});
      }

      
      const error = null;
      dispatch({type: "FETCH_ITEMS", value: {loading, error, items}});
    } catch (exception) {
      dispatch({type: "FETCH_ITEMS", value: {loading, error: exception.message, items: []}});
    }
  };
}