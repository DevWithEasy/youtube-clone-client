import {useState,useEffect} from 'react'
import {getRandomVideos} from '../../utils/getVideo';
import Card from "./Card/Card"
const Random = () => {
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        getRandomVideos('https://youtube-clone-bangla.onrender.com/api/video/random',setVideos)
    },[])
    console.log(videos)
    return (
        <div className='mx-4 my-2 grid grid-cols-4 gap-2'>
            {
                videos.length > 0 &&
                videos.map(video=><Card video={video} key={video._id}/>)
            }
        </div>
    );
};

export default Random;