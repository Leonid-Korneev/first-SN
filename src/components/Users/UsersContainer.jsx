import {connect} from "react-redux";
import Users from "./Users";
import { setUsersAC, toggleFollowAC, } from "../../redux/users-reducer";



let mapStateToProps = (state) => {

    return ({
        usersSearch: state.usersSearch
    })
}

let mapDispatchToProps = (dispatch) => {
    return ({
        followToggle: (userId)=> {
            dispatch(toggleFollowAC(userId))
        },


        setUsers: (users)=> {
            dispatch(setUsersAC(users))
        }




    })

}


let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;