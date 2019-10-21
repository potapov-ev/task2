import axios from "axios";

/* return { !!! доделать
  loading: true,
  error: null,
  items: data["products"],
} */

export function itemsFetchData(url) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(url);
      return dispatch({type: "ADD_ITEMS", value: data["products"]});
    } catch (exception) {
      alert(exception.message);
    }
  };
}
