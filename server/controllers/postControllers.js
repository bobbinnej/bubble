import PostsModel from '../models/postsModel.js';

// get all posts
export const getPosts =async (req,res) =>{
    try {
        const postModel = await PostsModel.find();
        res.status(200).json(postModel);
        
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}


// create a post
export const createPost = async (req,res)=>{
     const post=req.body;
     const newPost=PostsModel(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
   
  } catch (error) {
    res.status(409).json({message:error.message});
    
  }
}