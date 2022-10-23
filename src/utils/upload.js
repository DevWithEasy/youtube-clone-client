import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {v4} from "uuid";
import { storage } from "./firebaseConfig";

//here this function reacieved four arguments
//1.upload file (File object)
//2.Path whred file upload in bucket (String)
//3.set function where upload progress persent will set (Function)
//3.set function where uploaded file link will set (Function)

const upload =(file,path,setPogress,setUrl)=>{
    //create unique filename
    const filename = file?.name.split(" ").join("-") + v4();

    //create upload path in bucket
    const storageRef = (storage,`/${path}/${filename}`)

    //create upload function
    const uploadTask=uploadBytesResumable(storageRef,file)

    //upload and get upload progressPersent and uploaded file lonk
    uploadTask.on("state_changed", (snapshot) =>{
        //create upload progress
        const progressPersent = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100

        setPogress(progressPersent)
    },(err)=>{
        console.log(err)
    },()=>{
        //create uploaded file link
        getDownloadURL(uploadTask.snapshot.ref)
        .then(url=>{
            setUrl(url)
        })
        .catch(err=>{
            console.log(err);
        })
    })
}

export default upload;