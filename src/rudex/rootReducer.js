import { combineReducers } from "redux";
import productsReducer from "./products/productReducer";
import newsReducer from "./news/newsReducer";
import authReducer from "./auth/authReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  news: newsReducer,
  authData: authReducer,
  cartData: cartReducer,
});

export default rootReducer;
