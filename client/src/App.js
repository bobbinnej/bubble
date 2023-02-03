import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import jobhuntLogo from './images/jobhuntLogo.png';
import useStyles from './styles';
import Posts from './components/PostsFolder/Posts';
import Form from './components/FormFolder/Form';
import {getPosts} from './actions/postsActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  return (
   <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="absolute" color="inherit">
        <Typography className={classes.title} variant="h4" align="center">Job Hunt Ls</Typography>
        <img className={classes.logo} src={jobhuntLogo} alt="job hunt ls" height="70"/>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
   </Container>
  );
}

export default App;
