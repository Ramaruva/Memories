import { POST_FAILURE, POST_LOADING, POST_SUCCESS } from "./postactionTypes";

const initstate = {
  ploading: false,
  pfailure: false,
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
    default:
      return state;
  }
};
