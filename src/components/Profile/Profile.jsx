import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileDescribtionContainer from "./ProfileDescribtion/ProfileDescribtionContainer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


const Profile = ({isAuth}) => {


    return (
        <>

            {!isAuth ? <Redirect to={"/login"}/> : <div>
                <ProfileDescribtionContainer/>
                <MyPostsContainer/>
            </div>}

        </>


    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps) (Profile);