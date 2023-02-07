export default(postsReducer = [], action) =>{
    switch(action.type){
        case 'FETCH_ALL_POSTS':
            return action.payload;
        case 'CREATE_POST':
            return [...postsReducer, action.payload];
        default:
            return postsReducer;
    }
}