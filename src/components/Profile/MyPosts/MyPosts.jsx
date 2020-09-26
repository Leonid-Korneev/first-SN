import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {
    debugger;
    const postDataElements = props.state.postsData.map((el)=>{ return <Post message={el.text} amountOfLikes={el.likes}/>})
    return (
        <div>
            <div className={s.postsBlock}>
                <textarea></textarea>
                <button className={s.button}>Add Post</button>
                <div className={s.title}> My posts</div>
            </div>
            <div className={s.posts}>
                {postDataElements}
            </div>
        </div>
    )
}
export default MyPosts;
