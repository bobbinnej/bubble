export default(postsReducer = [], action) =>{
    switch(action.type){
        case 'FETCH_ALL_POSTS':
            return postsReducer;
        case 'CREATE_POST':
            return postsReducer;
        default:
            return postsReducer;
    }
}