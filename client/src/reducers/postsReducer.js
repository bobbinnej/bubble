export default(postsReducer = [], action) =>{
    switch(action.type){
        case 'UPDATE_POST':
            return postsReducer.map((post)=>post._id===action.payload._id ? action.payload:post);
        case 'FETCH_ALL_POSTS':
            return action.payload;
        case 'CREATE_POST':
            return [...postsReducer, action.payload];
        default:
            return postsReducer;
    }
}