import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileDescribtionContainer from "./ProfileDescribtion/ProfileDescribtionContainer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";






const Profile = () => {


    return (




        <>

            <ProfileDescribtionContainer/>
                <MyPostsContainer/>






        </>


    );
}


export default   withAuthRedirect(Profile)