import React from 'react';
import Post from './Post/Post';
import useStyle from './styles';
import {useSelector} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';


function Posts({setCurrentId}) {
  const postsReducer = useSelector((state)=>state.postsReducer);
  const classes= useStyle();
  console.log(postsReducer);
  return (
   !postsReducer.length ? <CircularProgress/> : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {postsReducer.map((post)=>(
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId}/>
        </Grid>
      ))};
    </Grid>
   )
  )
}

export default Posts