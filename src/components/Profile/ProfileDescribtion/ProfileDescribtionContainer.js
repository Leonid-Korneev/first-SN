import {connect} from "react-redux";
import ProfileDescribtion from "./ProfileDescribtion";
import {getUserStatus, updateUserStatus} from "../../../redux/profile-reducer";


let mapStateToProps = (state) => {

    return {

        profile: {...state.profile},
        isFetching: state.profile.isFetching,
        status: state.profile.status
    }

}
let mapDispatchToProps = {
    updateUserStatus,
    getUserStatus
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileDescribtion);