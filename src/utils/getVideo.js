import axios from 'axios'

export const getRandomVideos=async(url,setVideos)=>{
   try{
    const res = await axios.get(url)
    setVideos(res.data)
   }catch(err){
    console.log(err)
   }
}
