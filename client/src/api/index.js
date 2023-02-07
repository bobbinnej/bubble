import axios from 'axios';

const url = "http://localhost:3001/posts";  /// this is the default route in the backend

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);