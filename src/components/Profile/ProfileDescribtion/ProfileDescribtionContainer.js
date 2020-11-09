import {connect} from "react-redux";
import ProfileDescribtion from "./ProfileDescribtion";
import {getProfile, getUserStatus, savePhoto, updateUserStatus} from "../../../redux/profile-reducer";
import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

import {getSideBarFriends} from "../../../redux/friends-reducer";




const ProfileDescribtionContainer = ({getSideBarFriends,getProfile,getUserStatus,authorizedUserId,isFetching,...props})=> {

    let userId = (props.match.params.userId)
    userId =  userId ?? authorizedUserId ?? 2
    useEffect(()=>{

      getSideBarFriends()
      getProfile(userId)
      getUserStatus(userId)

    }, [userId, getSideBarFriends , getProfile, getUserStatus ])


  return (isFetching) ? <Preloader/>  : <ProfileDescribtion {...props} authorizedUserId={authorizedUserId} savePhoto={props.savePhoto}  userId={userId} />


}


let mapStateToProps = (state) => {


    return {
        profile: state.profile.profile,
        isFetching : state.profile.isFetching,

        status: state.profile.status,
        isAuth: state.auth.isAuth,
        authorizedUserId : state.auth.id
    }

}
let mapDispatchToProps = {
    updateUserStatus,
    getUserStatus,
    getProfile,
    savePhoto,
    getSideBarFriends
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileDescribtionContainer));