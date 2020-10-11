import React from 'react';


import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import * as axios from "axios";


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/3")
            .then((response) => {
                this.props.setProfile(response.data)
            })

    }

    render() {


        return (<div>
            <Profile profile={this.props.profile}/>
        </div>)


    }
}

let mapStateToProps = (state) => {

    return ({profile: {...state.profile}})
}
let mapDispatchToProps = {
    setProfile
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);


