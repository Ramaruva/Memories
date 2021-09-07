import { POST_FAILURE, POST_LOADING, POST_SUCCESS, SINGLE_POST_FAILURE, SINGLE_POST_LOADING, SINGLE_POST_SUCCESS ,SINGLE_POST_UPDATE} from "./postactionTypes";
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

export const singleLoading =()=>
(
  {
    type:SINGLE_POST_LOADING
  }
)
export const singleFailure =()=>
(
  {
    type:SINGLE_POST_FAILURE
  }
)
export const singlePosts =(payload)=>
(
  {
    type:SINGLE_POST_SUCCESS,
    payload
  }
)
export const singleUpdate=(payload)=>
(
  {

    type:SINGLE_POST_UPDATE,
    payload
  }
)
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

export const createpostData =(post)=>async(dispatch)=>
{
   dispatch(singleLoading())
  try {
           const {data}= await api.createposts(post)
           console.log(data,"si")
            dispatch(singlePosts(data))
          } catch (error) {
             dispatch(singleFailure())
          }
}

export const updatePostData =(id,post)=>async(dispatch)=>
{
     dispatch(singleLoading())
     try {
        const {data}=await api.updatePost(id,post)
        dispatch(singleUpdate(data))
      } catch (error) {
        dispatch(singleFailure())
     }
}
