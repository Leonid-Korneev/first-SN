import {connect} from "react-redux";
import ProfileDescribtion from "./ProfileDescribtion";
import {getProfile, getUserStatus, updateUserStatus} from "../../../redux/profile-reducer";
import React from "react";
import {withRouter} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";


class ProfileDescribtionContainer extends React.Component {
    componentDidMount() {

        let userId = (this.props.match.params.userId)
        userId =  userId ?? this.props.authorizedUserId ?? 2

        this.props.getProfile(userId)
        this.props.getUserStatus(userId)


    }




    render() {

     return  this.props.isFetching ? <Preloader/>  :
            <ProfileDescribtion {...this.props}/>
    }
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