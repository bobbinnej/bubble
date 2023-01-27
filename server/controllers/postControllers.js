import PostsModel from '../models/postsModel.js';

export const getPosts =async (req,res) =>{
    try {
        const postModel = await PostsModel.find();
        res.status(200).json(postModel);
        
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}


export const createPost = (req,res)=>{
    res.send("create post works");
}