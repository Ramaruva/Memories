import "./App.css";
import {useState} from 'react'
import Container from "@material-ui/core/Container";
import { AppBar, Grid, Grow, Typography } from "@material-ui/core";
import { Posts } from "./components/posts/Posts";
import { Form } from "./components/form/Form";
import {useDispatch} from "react-redux"
import useStyles from './styles'
import { useEffect } from "react";
import { postdata } from "./redux/posts/actionPosts";
function App() {
  
  const dispatch = useDispatch()
 const [currentId,setCurrentId]=useState(null)
  const classes = useStyles()
  useEffect(()=>
  {
      dispatch(postdata())
  },[currentId,dispatch])
  return (
    <>
      <Container>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img
             className={classes.image}
              src="./memories.png"
            alt="memories"
            height="60"   
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid className={classes.mainContainer} xs={12} sm={7}>
                <Posts  setCurrentId={setCurrentId}/>
              </Grid>
              <Grid xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}

export default App;
