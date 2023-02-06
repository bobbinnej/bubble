import React from 'react';
import Post from './Post/Post';
import {useSelector} from 'react-redux';


function Posts() {
  const postsReducer = useSelector((state)=>state.postsReducer);
  console.log(postsReducer);
  return (
    <div>
        <h1>posts</h1>
        <Post/>
        <Post/>
    </div>
  )
}

export default Posts