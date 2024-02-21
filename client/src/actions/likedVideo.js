import * as api from '../api'

export const addToLikedVideo=(likedVideoData)=>async(dispatch)=>{
    try {
        const {data} = await api.addToLikedVideo(likedVideoData);
        dispatch({ type: "POST_LIKEDVIDEO", data });
        dispatch(getAllLikedVideo())
    } catch (error) {
        console.log(error);
    }
}
export const getAllLikedVideo=()=>async(dispatch)=>{
    try {
        const {data} = await api.getAllLikedVideo();
        dispatch({type:'FETCH_All_LIKED_VIDEOS',payload:data});
    } catch (error) {
        console.log(error);
    }
}
   
export const deleteLikedVideo=(likedVideoData)=>async(dispatch)=>{
    try {
        const {videoId,Viewer}=likedVideoData;
        await api.deleteLikedVideo(videoId,Viewer);
        dispatch(getAllLikedVideo());
    } catch (error) {
        console.log(error);
    }
}