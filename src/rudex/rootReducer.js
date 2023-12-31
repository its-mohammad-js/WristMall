import { combineReducers } from "redux";
import productsReducer from "./products/productReducer";
import newsReducer from "./news/newsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  news: newsReducer,
});

export default rootReducer;
