import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let newPostText = React.createRef();



    let onAddPost = () => {


        props.dispatch(addPostActionCreator());

        newPostText.current.value = "";
    };


    let onPostChange = () => {

        let text = newPostText.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));

    };


    const postDataElements = props.profile.postsData.map((el) => {
        return <Post message={el.text} amountOfLikes={el.likes}/>
    })
    return (
        <div>
            <div className={s.postsBlock}>
                <textarea ref={newPostText} onChange={onPostChange} value={props.profile.newPostText}/>
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
