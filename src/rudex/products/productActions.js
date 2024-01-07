import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./productTypes";
import { db } from "../../config/firebase";
import toast from "react-hot-toast";

const productsCollectionRef = collection(db, "Products");

// get all products from data base
export function fetchProducts() {
  return (dispatch) => {
    // dispatch request
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    // async get function
    const getAllProducts = async () => {
      try {
        // get all products from firebase
        const data = await getDocs(productsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // disptach success
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: filteredData });
      } catch (error) {
        // dispatch failure
        toast.error("something went wrong");
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error });
      }
    };
    // call fetch function
    getAllProducts();
  };
}
