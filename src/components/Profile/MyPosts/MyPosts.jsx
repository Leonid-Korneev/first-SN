import React from 'react';
import s from "./MyPosts.module.css"
import Post from './Post/Post';


const MyPosts = () => {
    const postsData = [
        {id: 1, text: "hi, how are you?", likes: 30},
        {id: 2, text: "This is my first post", likes: 43}
    ];
    const postDataElements = postsData.map(el => el =  <Post message={el.text} amountOfLikes={el.likes}/>)

    return (

        <div>

            <div className={s.postsBlock}>
                <textarea></textarea>
                <button className={s.button}>Add Post</button>
              <div className={s.title}> My posts </div>
            </div>

            <div className={s.posts}>
                {postDataElements}
            </div>


        </div>

    )

}

export default MyPosts;
