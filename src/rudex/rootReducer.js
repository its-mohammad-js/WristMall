import { combineReducers } from "redux";
import productsReducer from "./products/productReducer";

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
