import {connect} from "react-redux";
import ProfileDescribtion from "./ProfileDescribtion";

let mapStateToProps = (state) => {

    return {

        profile: {...state.profile},

        isFetching: state.profile.isFetching
    }
}



export default connect(mapStateToProps)(ProfileDescribtion);