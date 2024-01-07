import {
  AUTH_USER_FAILURE,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  SIGN_OUT_USER,
} from "./authTypes";

const initialState = {
  loading: false,
  isAuthenticated: false,
  userUid: null,
  userData: {},
  error: "",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case AUTH_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        userData: action.payload,
        isAuthenticated: true,
        userUid: action.uid,
        error: "",
      };
    }
    case SIGN_OUT_USER:
      return { initialState };
    case AUTH_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        newsData: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
