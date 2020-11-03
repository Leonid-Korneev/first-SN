
import {connect} from "react-redux";

import FriendsSideBar from "./FriendsSideBar";

let mapStateToProps = (state) => {
    return {

        friends: state.friends

    }
}


let FriendsSideBarContainer = connect(mapStateToProps)(FriendsSideBar);

export default FriendsSideBarContainer