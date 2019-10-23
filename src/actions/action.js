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

export function userFetchData(url, login, password) {
  return async (dispatch) => {
    const loading = false;
    try {
      const { data } = await axios.get(url);
      const users = data["users"];
      let user = {};

      for (let user_ of users) {
        if (user_.login === login && user_.password === password) {
          user = user_;
        }
        else {
          return;
        }
      }

      document.location.href = "/Admin";
      /* Предполагается, что jwt создается в бэкенде? */
      dispatch({type: "FIND_USER", value: {loading, error: null, userData: {login: login, jwt: user.jwt} }});
    } catch (exception) {
      dispatch({type: "FIND_USER", value: {loading, error: exception.message, userData: {} }});
    }
  }
}
