import {connect} from "react-redux";
import ProfileDescribtion from "./ProfileDescribtion";

let mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}


const ProfileDescribtionContainer = connect(mapStateToProps)(ProfileDescribtion);

export default ProfileDescribtionContainer;