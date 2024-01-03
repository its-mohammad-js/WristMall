import {
  ADD_PRODUCT_TO_CART,
  CART_INIT,
  CART_ON_REQUEST,
  CLEAN_CART,
  DECRASE_PRODUCT_QUANTITY,
  INCREASE_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
} from "./cartTypes";

const initialState = {
  loading: false,
  cartData: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_INIT:
      return { ...state, cartData: action.payload };
    case CART_ON_REQUEST:
      return { ...state, loading: true };
    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
        loading: false,
      };
    }
    case REMOVE_PRODUCT_FROM_CART:
      return { ...state, cartData: action.payload, loading: false };
    case INCREASE_PRODUCT_QUANTITY:
      return {};
    case DECRASE_PRODUCT_QUANTITY:
      return {};
    case CLEAN_CART: {
      return {};
    }
    default:
      return state;
  }
}
