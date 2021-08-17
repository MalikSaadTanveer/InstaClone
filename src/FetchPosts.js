import React, {useState,useEffect} from 'react'
import {db} from './firebase.js'
import Post from './Post.js' 
import './Post.css'
const FetchPosts = () => {

    let [posts,setPosts] = useState([]);
    
    useEffect(() => { 
    let unsubscribe = db.collection('PostsForApproval')
    .orderBy('timestamp','desc')
        .onSnapshot(snapshot =>{
            return setPosts(snapshot.docs.map(doc=>({
                id:doc.id,
                post:doc.data()})
               ))
        })
        
        return () => {
         unsubscribe();   
        }
    }, [])

    return (
        <div>
      <div className="app__posts" >
    {posts.length!==0 ?
     posts.map(({id,post})=>{
        return <Post key={id} postId={id} username={post.username}  imgUrl={post.imgUrl} caption={post.caption}  />
     })
     :
     <div style={{marginTop:100,fontSize:30}}>No Post Found</div>
     }
     </div>
        </div>
    )
}

export default FetchPosts