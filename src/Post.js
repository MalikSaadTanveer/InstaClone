import React,{useState} from 'react'
import './Post.css'
import {Avatar,Button} from '@material-ui/core'
import {db} from './firebase.js'
import Snackbar from '@material-ui/core/Snackbar';
import firebase from 'firebase'

function Post({username,imgUrl,caption,postId}) {
    const [successMsg, setSuccessMsg] = useState(false);
    const [msg,setMsg]= useState('');
    let handleAccept = (user,img,text,id)=>{
        db.collection('posts').doc(id).set({
            username:user,
            imgUrl:img,
            caption:text,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        }).then((res)=>{
            setMsg("Post Approved Successfully");
            setSuccessMsg(true);

            setTimeout(() => {
                setSuccessMsg(false)
            }, 3000);
        })

        db.collection('PostsForApproval').doc(id).delete();
    }
    let handleDecline = (id)=>{
        db.collection('PostsForApproval').doc(id).delete();
    }

    return (
        <div>
          
            <div className="post">
    <Snackbar
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',}}
        open={successMsg}
        className='pendingMessage'
        onClose={()=>setSuccessMsg(false)}
        message={msg}
        // key={'top' + 'center'}
      />
                <div className="post__header">
                   <Avatar/>
                    <h3>{username}</h3>
                </div>
                <div>
                {( imgUrl?.includes('.mp4?') || imgUrl?.includes('.mpeg?') || imgUrl?.includes('.webm?') || imgUrl?.includes('.m4v?') )? 
                    <video controls className="post__imageURL">
                    <source src={imgUrl} type="video/mp4" />
                    </video>
                    :
                    <img 
                     className="post__imageURL"
                    src={imgUrl} alt="MyUploadedPhoto" />
                }
                </div>
                <h4><strong>{username}</strong> {caption}</h4>
               <div className="btnAcceptDecline" >
                <Button className="left" onClick={()=>handleAccept(username,imgUrl,caption,postId)}>Accept</Button>
                <Button className="right" onClick={()=>handleDecline(postId)}>Decline</Button>
                </div>
            </div>
        </div>
    )
}

export default Post
