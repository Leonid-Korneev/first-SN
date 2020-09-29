import React from 'react';
import MyPosts from './MyPosts/MyPosts';

import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {


    return (

        <div>

            <ProfileInfo store={props.store.appState.profile}/>
            <MyPosts store = {props.store}/>
        </div>

    );
}

export default Profile;