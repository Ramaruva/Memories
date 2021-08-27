import "./App.css";
import Container from "@material-ui/core/Container";
import { AppBar, Grid, Grow, Typography } from "@material-ui/core";
import { Posts } from "./components/posts/Posts";
import { Form } from "./components/form/Form";
function App() {
  return (
    <>
      <Container>
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">
            Memories
          </Typography>
          <img
            src="https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI"
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
