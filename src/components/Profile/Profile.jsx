import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileDescribtionContainer from "./ProfileDescribtion/ProfileDescribtionContainer";


const Profile = () => {


    return (
        <div>
            <ProfileDescribtionContainer />
            <MyPostsContainer/>
        </div>

    );
}

export default Profile;