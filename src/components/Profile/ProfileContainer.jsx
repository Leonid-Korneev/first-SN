import React from 'react';


import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
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

    getProfile

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));


