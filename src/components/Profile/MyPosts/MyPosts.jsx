import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";



const MyPosts = (props) => {



        let state = props.profile

    let onAddPost = () => {


        props.onAddPost()


    };


    let onPostChange = (event) => {


        let text = event.target.value;
        props.onPostChange(text)

    };

    debugger;
    const postDataElements = state.postsData.map((el) => {
        return <Post message={el.text} amountOfLikes={el.likes}/>
    })
    return (
        <div>
            <div className={s.postsBlock}>
                <textarea onChange={onPostChange} placeholder="Enter new post" value={state.newPostText}/>
                <button onClick={onAddPost} className={s.button}>Add Post</button>
                <div className={s.title}> My posts</div>
            </div>
            <div className={s.posts}>
                {postDataElements}
            </div>
        </div>
    )
}
export default MyPosts;
