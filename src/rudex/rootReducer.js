import { combineReducers } from "redux";
import productsReducer from "./products/productReducer";
import newsReducer from "./news/newsReducer";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  news: newsReducer,
  authData: authReducer,
});

export default rootReducer;
