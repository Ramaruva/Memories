import {
  POST_FAILURE,
  POST_LOADING,
  POST_SUCCESS,
  SINGLE_POST_FAILURE,
  SINGLE_POST_LOADING,
  SINGLE_POST_SUCCESS,
  SINGLE_POST_UPDATE,
} from "./postactionTypes";

const initstate = {
  ploading: false,
  pfailure: false,
  sloading: false,
  sfailure: false,
  psuccess: [],
};

export const postReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case POST_LOADING:
      return {
        ...state,
        ploading: true,
      };
    case POST_SUCCESS:
      return {
        ...state,
        ploading: false,
        psuccess: payload,
      };
    case POST_FAILURE:
      return {
        ...state,
        ploading: false,
        pfailure: true,
      };
    case SINGLE_POST_LOADING:
      return {
        ...state,
        sloading: true,
      };
    case SINGLE_POST_FAILURE:
      return {
        ...state,
        sloading: false,
        sfailure: true,
      };
    case SINGLE_POST_SUCCESS:
      return {
        ...state,
        sloading: false,
        psuccess: [...state.psuccess, payload],
      };
    case SINGLE_POST_UPDATE:
      const array = state.psuccess?.map((p) =>
        p._id === payload._id ? payload : p
      );
      return {
        ...state,
        sloading: false,
        psuccess: array,
      };
    default:
      return state;
  }
};
