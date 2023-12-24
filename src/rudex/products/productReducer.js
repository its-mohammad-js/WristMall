import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./productTypes";

const initialState = {
  loading: false,
  productsData: [],
  error: "",
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        productsData: action.payload,
        error: "",
      };
    }
    case FETCH_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        productsData: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
