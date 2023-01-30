import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import jobhuntLogo from './images/jobhuntLogo.png';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
   <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="absolute" color="inherit">
        <Typography className={classes.title} align="center">Job Hunt Ls</Typography>
        <img className={classes.logo} src={jobhuntLogo} alt="job hunt ls" height="70"/>
      </AppBar>
   </Container>
  );
}

export default App;
