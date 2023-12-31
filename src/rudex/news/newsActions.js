import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import toast from "react-hot-toast";
import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_REQUEST,
} from "./newsTypes";

const NewsCollectionRef = collection(db, "News");

export function fetchNews() {
  return (dispatch) => {
    // dispatch request
    dispatch({ type: FETCH_NEWS_REQUEST });

    // async get function
    const getAllProducts = async () => {
      try {
        // get all products from firebase
        const data = await getDocs(NewsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // disptach success
        dispatch({ type: FETCH_NEWS_SUCCESS, payload: filteredData });
      } catch (error) {
        // dispatch failure
        toast.error("something went wrong");
        dispatch({ type: FETCH_NEWS_FAILURE, payload: error });
      }
    };

    getAllProducts();
  };
}
