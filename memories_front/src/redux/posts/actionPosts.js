import { POST_FAILURE, POST_LOADING, POST_SUCCESS } from "./postactionTypes";
import * as api from "../../api/index";
export const postloading = () => ({
  type: POST_LOADING,
});

export const postFailure = () => ({
  type: POST_FAILURE,
});

export const postsuccess = (payload) => ({
  type: POST_SUCCESS,
  payload,
});

export const postdata = () => async (dispatch) => {
  dispatch(postloading());
  try {
    const { data } = await api.fetchposts();
    console.log(data)
    dispatch(postsuccess(data));
  } catch (error) {
    dispatch(postFailure());
  }
};
