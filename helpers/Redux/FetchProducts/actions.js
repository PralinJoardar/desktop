import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FALUIRE,
  } from "./constants";
  import axios from "axios";
  
  export const fetchProductsRequest = () => {
    return {
      type: FETCH_PRODUCTS_REQUEST,
    };
  };
  
  export const fetchProductsFaluire = (error) => {
    return {
      type: FETCH_PRODUCTS_FALUIRE,
      payload: error.message,
    };
  };
  export const fetchProducts = () => {
    return (dispatch) => {
      dispatch({
          type: FETCH_PRODUCTS_REQUEST,
        })
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          const products = response.data;
          dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: products,
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          dispatch(fetchProductsFaluire(errorMessage));
        });
    };
  };
  