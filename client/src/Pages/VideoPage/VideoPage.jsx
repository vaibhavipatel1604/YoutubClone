import React, { useEffect } from 'react'
// import vid from '../../Components/Video/vid.mp4'
import './VideoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Comments from '../../Components/Comments/Comments';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { addToHistory } from '../../actions/History';
import { viewVideo } from '../../actions/video';

function VideoPage() {

  const { vid } = useParams();
  const vids=useSelector((state) => state.videoReducer);
  // console.log(vids);
  const vv = vids?.data.filter((q) => q._id === vid)[0];

  const CurrentUser=useSelector((state)=>state?.currentUserReducer);
  const dispatch=useDispatch();

  const handleHistory=()=>{
    dispatch(
      addToHistory({
        videoId: vid,
        Viewer: CurrentUser?.result._id,
      })
    )
  }
  const handleViews=()=>{
    dispatch(
      viewVideo({
        id:vid
      })
    )
  }

  useEffect(()=>{
    if(CurrentUser){
      handleHistory();
    }
    handleViews();
  }, []);

  return (
    <> 
        <div className="container_videoPage">
            <div className="container2_videoPage">
                <div className="video_display_screen_videopage">
                  <video 
                  src={`http://localhost:5500/${vv?.filePath}`}
                  className={"video_Showvideo_videopage"}
                  controls
                  // autoPlay
                  ></video>
                  <div className="video_details_videopage">
                    <div className="video_btns_title_VideoPage_cont">
                      <p className="video_title_VideoPage">{vv?.videoTitle}</p>
                      <div className="views_date_btns_VideoPage">
                        <div className="views_videoPage">
                        {vv?.Views} views <div className="dot"></div> Uploaded {moment(vv?.createdAt).fromNow()}
                        </div>
                        <LikeWatchLaterSaveBtns vv={vv} vid={vid} />
                      </div>
                    </div>
                    <Link to={`/chanel/${vv?.videoChanel}`} className="chanel_details_videoPage">
                      <b className="chanel_logo_videoPage">
                        <p>
                        {vv?.Uploader?.charAt(0).toUpperCase()}
                        </p>
                      </b>
                      <p className="chanel_name_videoPage">{vv?.Uploader}</p>
                    </Link>
                    <div className="comments_VideoPage">
                      <h2>
                        <u>Comments</u>
                      </h2>
                      <Comments videoId={vv._id} />
                    </div>
                  </div>
                </div>
                <div className="moreVideoBar">
                  More Videos
                </div>
            </div>
        </div>
    </>
  )
}

export default VideoPage;