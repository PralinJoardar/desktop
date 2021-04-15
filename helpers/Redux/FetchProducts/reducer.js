import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FALUIRE,
} from "./constants";

const initialState = {
  loading: false,
  products: [],
  error: false,
};

const fetchProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: "",
      };
    case FETCH_PRODUCTS_FALUIRE:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchProductsReducer;
