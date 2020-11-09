import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profile: state.profile,
        authorizedUserId : state.auth.id
    }
}


let mapDispatchToProps =  {
        addPost
}


let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
