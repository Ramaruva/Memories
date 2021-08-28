import "./App.css";
import Container from "@material-ui/core/Container";
import { AppBar, Grid, Grow, Typography } from "@material-ui/core";
import { Posts } from "./components/posts/Posts";
import { Form } from "./components/form/Form";
import {useDispatch, useSelector} from "react-redux"
import useStyles from './styles'
import { useEffect } from "react";
import { postdata } from "./redux/posts/actionPosts";
function App() {
  
  const dispatch = useDispatch()
  const psuccess= useSelector(state=>state.post.psuccess)
  console.log(psuccess) 
  const classes = useStyles()
  useEffect(()=>
  {
      dispatch(postdata())
  },[dispatch])
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
              <Grid xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid xs={12} sm={4}>
                <Form />{" "}
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}

export default App;
