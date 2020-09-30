import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {




    let onAddPost = () => {


        props.dispatch(addPostActionCreator());


    };


    let onPostChange = (event) => {

        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));

    };


    const postDataElements = props.profile.postsData.map((el) => {
        return <Post message={el.text} amountOfLikes={el.likes}/>
    })
    return (
        <div>
            <div className={s.postsBlock}>
                <textarea  onChange={onPostChange} placeholder="Enter new post" value={props.profile.newPostText}/>
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
