import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home'
import Library from '../Pages/Library/Library';
import LikedVideo from '../Pages/LikedVideo/LikedVideo';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import WatchLater from '../Pages/WatchLater/WatchLater';
import YourVideo from '../Pages/YourVideo/YourVideo';
import VideoPage from '../Pages/VideoPage/VideoPage'
import Chanel from '../Pages/Chanel/Chanel';
import Search from '../Pages/Search/Search';
function AllRoutes({setVidUploadPage,setEditCreateChanelBtn}) {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/library' element={<Library/>} />
        <Route path='/yourvideos' element={<YourVideo/>} />
        <Route path='/watchlater' element={<WatchLater/>} />
        <Route path='/history' element={<WatchHistory/>} />
        <Route path='/likedvideo' element={<LikedVideo/>} />
        <Route path='/videopage/:vid' element={<VideoPage/>} />
        <Route path='/search/:searchQuery' element={<Search/>} />
        <Route 
          path='/chanel/:Cid' 
          element={<Chanel 
          setVidUploadPage={setVidUploadPage}
          setEditCreateChanelBtn={setEditCreateChanelBtn}/>} 
        />
    </Routes>
  )
}

export default AllRoutes