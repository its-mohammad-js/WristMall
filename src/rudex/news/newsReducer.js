import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
} from "./newsTypes";

const initialState = {
  loading: false,
  newsData: [],
  error: "",
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_NEWS_SUCCESS: {
      return {
        ...state,
        loading: false,
        newsData: action.payload,
        error: "",
      };
    }
    case FETCH_NEWS_FAILURE: {
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
