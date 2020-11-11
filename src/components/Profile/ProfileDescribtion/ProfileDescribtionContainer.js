import {connect} from "react-redux";
import ProfileDescribtion from "./ProfileDescribtion";
import {
    getProfile,
    getUserStatus,
    savePhoto,
    setProfile,
    toggleIsFetching,
    updateUserStatus
} from "../../../redux/profile-reducer";
import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

import {getSideBarFriends} from "../../../redux/friends-reducer";


const ProfileDescribtionContainer = ({getSideBarFriends, getProfile, getUserStatus, authorizedUserId, isFetching, toggleIsFetching, setProfile, ...props}) => {

    let userId = (props.match.params.userId)
    userId = userId ?? authorizedUserId
    useEffect(() => {
        getSideBarFriends()
        getProfile(userId)
        getUserStatus(userId)
        return () => {
            setProfile(null)
        }
    }, [userId, getSideBarFriends, getProfile, getUserStatus,setProfile])


    return (isFetching) ? <Preloader/> :
        <ProfileDescribtion {...props} authorizedUserId={authorizedUserId} savePhoto={props.savePhoto} userId={userId}/>


}


let mapStateToProps = (state) => {


    return {
        profile: state.profile.profile,
        isFetching: state.profile.isFetching,
        status: state.profile.status,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.id
    }

}
let mapDispatchToProps = {
    updateUserStatus,
    getUserStatus,
    getProfile,
    savePhoto,
    getSideBarFriends,
    toggleIsFetching,
    setProfile
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileDescribtionContainer));