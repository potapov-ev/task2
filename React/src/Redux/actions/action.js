import Strapi from "strapi-sdk-javascript/build/main";

export function itemsGetData(url) {
  return async (dispatch) => {  
    const loading = false;
    try {
      const strapi = new Strapi("http://localhost:1337");
      const items = await strapi.getEntries(url);   
      const error = null;
      
      dispatch({type: "FETCH_ITEMS", value: {loading, error, items}});
    } catch (exception) {
      dispatch({type: "FETCH_ITEMS", value: {loading, error: exception.message, items: []}});
    }
  };
}