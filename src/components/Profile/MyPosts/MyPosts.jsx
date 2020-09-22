import React from 'react';
import s from "./MyPosts.module.css"
import Post from './Post/Post';



const MyPosts = () => {

  return (

    <div>
      <textarea></textarea>
      <button>Add Post</button>
    
    <div className={s.posts}>
    <Post message= 'hi, how are you?'  amountOfLikes="30"  />
    <Post message = "This is my first post" amountOfLikes="43" />
    </div>

    

    
  </div>

  )

}

export default MyPosts;
