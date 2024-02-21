import React from 'react'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
// import vid from '../../Components/Video/vid.mp4'
import DescribeChanel from './DescribeChanel';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Chanel({setEditCreateChanelBtn,setVidUploadPage}) {

    const {Cid} = useParams();
    const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q.videoChanel === Cid).reverse();

    // const vids = [
    //     {
    //       _id: 1,
    //       video_src: vid,
    //       chanel: "62bafe6752cea35a6c30685f",
    //       title: "video 1",
    //       Uploader: "abc",
    //       description: "description of video 1"
    //     },
    //     {
    //       _id: 2,
    //       video_src: vid,
    //       chanel: "cdd",
    //       title: "video 2",
    //       Uploader: "xyz",
    //       description: "description of video 2"
    //     },
    //     {
    //       _id: 3,
    //       video_src: vid,
    //       chanel: "add",
    //       title: "video 3",
    //       Uploader: "mno",
    //       description: "description of video 3"
    //     },
    //     {
    //       _id: 4,
    //       video_src: vid,
    //       chanel: "add",
    //       title: "video 4",
    //       Uploader: "pqr",
    //       description: "description of video 4"
    //     },
    //   ];
    
    return (
        <div className='container_Pages_App'>
          <LeftSidebar />
          <div className="container2_Pages_App">
            <DescribeChanel
            Cid={Cid} 
            setVidUploadPage={setVidUploadPage}
            setEditCreateChanelBtn={setEditCreateChanelBtn}/>
            <ShowVideoGrid vids={vids}/>
          </div>
        </div>  
      )
}

export default Chanel