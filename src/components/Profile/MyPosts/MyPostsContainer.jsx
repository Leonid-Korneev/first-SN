import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let onAddPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    };


    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);

    };

    return (

     <MyPosts  updateNewPostTextActionCreator = {onPostChange} addPostActionCreator={onAddPost} profile={props.profile}/>
    )
}
export default MyPostsContainer;
