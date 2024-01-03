import { ADD_PRODUCT_TO_CART, CART_INIT, CART_ON_REQUEST } from "./cartTypes";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

// initialize user cart data from firebase
export function userCartDataInit(userCartData) {
  return { type: CART_INIT, payload: userCartData };
}

// add product to local cart and user cartData on firebase
export function AddProductToCart(productId, isAuthenticated, userUid) {
  // if user not logged in (just add to local cart)
  if (!isAuthenticated)
    return { type: ADD_PRODUCT_TO_CART, payload: { productId, quantity: 1 } };
  // if user logged in :
  else if (isAuthenticated)
    return (dispatch) => {
      // dispatch loading
      dispatch({ type: CART_ON_REQUEST });

      // send request to firebase
      const addProductToFireBase = async () => {
        try {
          // refrence to user data in firebase
          const userDataRef = doc(db, "UsersData", userUid);
          // add new product to user cart data
          await updateDoc(userDataRef, {
            userCart: arrayUnion({ productId, quantity: 1 }),
          });
          // dispatch success
          dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: { productId, quantity: 1 },
          });
        } catch (error) {
          console.log(error);
        }
      };

      // call async function
      addProductToFireBase();
    };
}
