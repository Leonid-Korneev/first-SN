import {connect} from "react-redux";
import ProfileDescribtion from "./ProfileDescribtion";
import {getProfile, getUserStatus, updateUserStatus} from "../../../redux/profile-reducer";
import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";




const ProfileDescribtionContainer = (props)=> {
    let userId = (props.match.params.userId)
    userId =  userId ?? props.authorizedUserId ?? 2
    useEffect(()=>{


      props.getProfile(userId)
      props.getUserStatus(userId)

    }, [userId])


  return (props.isFetching) ? <Preloader/>  : <ProfileDescribtion {...props}/>

}


let mapStateToProps = (state) => {


    return {
        profile: state.profile,
        isFetching: state.profile.isFetching,
        status: state.profile.status,
        isAuth: state.auth.isAuth,
        authorizedUserId : state.auth.id
    }

}
let mapDispatchToProps = {
    updateUserStatus,
    getUserStatus,
    getProfile
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileDescribtionContainer));