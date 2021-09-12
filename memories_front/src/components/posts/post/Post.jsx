import { Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Delete, ThumbUpAlt } from "@material-ui/icons";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { Deletepost, LikeSingle } from "../../../redux/posts/actionPosts";
import useStyles from "./pstyle";

export const Post = ({ post ,setCurrentId}) => {
  const classes = useStyles();
  const dispatch =useDispatch()
  const handleDelete =(a)=>
  { 
      dispatch(Deletepost(a))  
  }
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags?.map((tag) => `${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
      <CardContent>
        <Typography  variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
              <Button size="small" color="primary" onClick={()=>dispatch(LikeSingle(post._id))}>
                    <ThumbUpAlt  fontSize="small"/>
                    like
                    {post.likeCount}
              </Button>
              <Button size="small" color="primary" onClick={()=>handleDelete(post._id)}>
                   <Delete  fontSize="small"/>
                   Delete
              </Button>
      </CardActions>
    </Card>
  );
};
