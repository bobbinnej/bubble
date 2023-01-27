import PostsModel from '../models/postsModel.js';
export const getPosts = (req,res) =>{
    res.send("Get posts works");
}


export const createPost = (req,res)=>{
    res.send("create post works");
}