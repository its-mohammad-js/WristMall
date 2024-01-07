import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db, googleProvider } from "../../config/firebase";
import {
  AUTH_USER_FAILURE,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  SIGN_OUT_USER,
} from "./authTypes";
import toast from "react-hot-toast";
import { doc, setDoc } from "firebase/firestore";

// create new user account and database collection with email and pwassword
export function signInWithEmail(userData) {
  return (dispatch) => {
    // dispatch request
    dispatch({ type: AUTH_USER_REQUEST });

    // async signIn function
    const signIn = async () => {
      try {
        // signIn with email and pass
        const signInRes = await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
        // user collection sample :
        const newUserCollection = {
          userEmail: userData.email,
          bookmarks: [],
          userCart: [],
          userId: signInRes?.user?.uid || null,
        };
        // create new user data collection with (User Uid)
        await setDoc(
          doc(db, "UsersData", signInRes?.user?.uid),
          newUserCollection
        );
        // disptach success after two requests
        dispatch({
          type: AUTH_USER_SUCCESS,
          payload: userData,
          uid: signIn?.user?.uid,
        });
        toast.success("Welcome To Wrist Mall");
      } catch (error) {
        // dispatch failure
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          toast.error("email is already in use");
          dispatch({ type: AUTH_USER_FAILURE, payload: error });
        } else {
          toast.error(error.message || "something went wrong");
          dispatch({ type: AUTH_USER_FAILURE, payload: error });
        }
      }
    };
    // call signIn function
    signIn();
  };
}

// create new user account and database collection with gmail
export function signInWithGamil() {
  return (dispatch) => {
    // dispatch request
    dispatch({ type: AUTH_USER_REQUEST });

    // async signIn with gmail function
    const signInGmail = async () => {
      try {
        // signIn popUp
        const signInRes = await signInWithRedirect(auth, googleProvider);
        console.log(signInRes);
        // // user collection sample :
        const newUserCollection = {
          userEmail: signInRes?.user?.email,
          bookmarks: [],
          userCart: [],
          userId: signInRes?.user?.uid || null,
        };
        // // create new user data collection with (User Uid)
        await setDoc(
          doc(db, "UsersData", signInRes?.user?.uid),
          newUserCollection
        );
        // // disptach success after two requests
        dispatch({
          type: AUTH_USER_SUCCESS,
          payload: { email: signInRes?.user?.email },
          uid: signInRes?.user?.uid,
        });
        toast.success("Welcome To Wrist Mall");
      } catch (error) {
        console.log(error);
        // dispatch failure
        toast.error(error.message);
        dispatch({ type: AUTH_USER_FAILURE, payload: error });
      }
    };

    // call sigIn with gmail function
    signInGmail();
  };
}

// signUp with email & password
export function signUpWithEmail(userData) {
  return (dispatch) => {
    // dispatch request
    dispatch({ type: AUTH_USER_REQUEST });

    // async signUp with email function
    const signInEmail = async () => {
      try {
        // signIn popUp
        const signInRes = await signInWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
        console.log(signInRes);
        //fetch userData from server :
        //
        // disptach success after two requests
        dispatch({
          type: AUTH_USER_SUCCESS,
          payload: { email: signInRes?.user?.email },
          uid: signInRes?.user?.uid,
        });
        toast.success("Welcome Back");
      } catch (error) {
        // dispatch failure
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          toast.error("Email Or Password Is Incorrect");
          dispatch({ type: AUTH_USER_FAILURE, payload: error });
        } else {
          toast.error(error.message || "something went wrong");
          dispatch({ type: AUTH_USER_FAILURE, payload: error });
        }
      }
    };

    // call sigIn with gmail function
    signInEmail();
  };
}

// initalize user data
export function initialUser(userData) {
  return { type: AUTH_USER_SUCCESS, payload: userData };
}

// log out user
export function SignOutUser() {
  return (dispatch) => {
    // dispatch request
    dispatch({ type: AUTH_USER_REQUEST });

    // log out dunction
    const signOutUserHandle = async () => {
      try {
        await signOut(auth);
        // dispatch user signed out
        dispatch({ type: SIGN_OUT_USER });
        toast.success("You have logged out of your account");
      } catch (error) {
        console.log(error);
        // dispatch error
        dispatch({ type: AUTH_USER_FAILURE, payload: error });
        toast.error(error.message || "Something Went Wrong");
      }
    };

    // call sign out function
    signOutUserHandle();
  };
}
