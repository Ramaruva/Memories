import React from "react";
import { Post } from "./post/Post";
import { useSelector } from "react-redux";
import useStyles from "./pstyle";
import { CircularProgress, Grid } from "@material-ui/core";
export const Posts = () => {
  const classes = useStyles();
  const psuccess = useSelector((state) => state.post.psuccess);
  console.log(psuccess);

  return (
    <>
      {!psuccess.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={3}
        >
            {
                psuccess?.map((post)=>(
                    <Grid key={post._id} xs={12} sm={6} item>
                        <Post post={post} />
                     </Grid>   
                ))
            }
        </Grid>
      )}
    </>
  );
};
