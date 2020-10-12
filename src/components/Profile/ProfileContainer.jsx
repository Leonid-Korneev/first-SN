import React from 'react';


import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import * as axios from "axios";
import {withRouter} from "react-router-dom";
import {toggleIsFetching} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ?? 11987}`)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setProfile(response.data)
            })

    }

    render() {
        return (<div>
            <Profile profile={this.props.profile} isFetching={this.props.isFetching}/>
        </div>)


    }
}

let mapStateToProps = (state) => {
    return ({profile: {...state.profile}, isFetching: state.usersSearch.isFetching})
}

let mapDispatchToProps = {
    setProfile,
    toggleIsFetching

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));


