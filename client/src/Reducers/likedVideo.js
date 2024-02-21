const likedVideoReducer = (state={data:null},action)=>{
    switch (action.type) {
        case 'POST_LIKEDVIDEO':
            return {...state, data: action?.data };
        case 'FETCH_All_LIKED_VIDEOS':
            return {...state,data:action.payload};
        default:
            return state;
    }
}

export default likedVideoReducer;