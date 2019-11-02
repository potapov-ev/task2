import Strapi from "strapi-sdk-javascript/build/main";

export const fetchProducts = url => {
  return async (dispatch) => {  
    const FETCH_ITEMS = "FETCH_ITEMS";
    try {
      const SERVER_URL = "http://localhost:1337";
      const strapi = new Strapi(SERVER_URL);
      const items = await strapi.getEntries(url);   
      dispatch({type: FETCH_ITEMS, value: items });
    } catch {
      dispatch({type: FETCH_ITEMS, value: [] });
    }
  };
}

export const fetchCategories = url => {
  return async (dispatch) => {  
    const FETCH_CATEGORIES = "FETCH_CATEGORIES";
    try {
      const SERVER_URL = "http://localhost:1337";
      const strapi = new Strapi(SERVER_URL);
      const categories = await strapi.getEntries(url);   
      dispatch({type: FETCH_CATEGORIES, value: categories });
    } catch {
      dispatch({type: FETCH_CATEGORIES, value: [] });
    }
  };
}