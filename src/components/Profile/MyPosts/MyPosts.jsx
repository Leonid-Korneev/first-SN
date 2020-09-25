import React from 'react';
import s from "./MyPosts.module.css"
import Post from './Post/Post';


const MyPosts = () => {
    const postData = [
        {id: 1, text: "hi, how are you?", likes: 30},
        {id: 2, text: "This is my first post", likes: 43}
    ];

    return (

        <div>

            <div className={s.postsBlock}>
                <textarea></textarea>
                <button className={s.button}>Add Post</button>
              <div className={s.title}> My posts </div>
            </div>

            <div className={s.posts}>
                <Post message={postData[0].text} amountOfLikes={postData[0].likes}/>
                <Post message={postData[1].text} amountOfLikes={postData[1].likes}/>
            </div>


        </div>

    )

}

export default MyPosts;
