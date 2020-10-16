import React from 'react';


import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus} from "../../redux/profile-reducer";
import { withRouter} from "react-router-dom";

import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)

    }

    render() {

        return (


            <Profile profile={this.props.profile} />)


    }
}



let mapStateToProps = (state) => {
    return ({profile: {...state.profile}, isFetching: state.usersSearch.isFetching})
}

let mapDispatchToProps = {
    getProfile,
    getUserStatus
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter )(ProfileContainer)
// withAuthRedirect


