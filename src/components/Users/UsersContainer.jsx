import {connect} from "react-redux";
import Users from "./Users";
import {
    setNewUsersAC,
    setPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    showMoreUsersAC,
    toggleFollowAC,
} from "../../redux/users-reducer";



let mapStateToProps = (state) => {


    return ({
        usersSearch: state.usersSearch,
        currentPage: state.usersSearch.currentPage,
        totalUsersCount:state.usersSearch.totalUsersCount,
        pageSize : state.usersSearch.pageSize,

    })
}

let mapDispatchToProps = (dispatch) => {
    return ({
        followToggle: (userId)=> {
            dispatch(toggleFollowAC(userId))
        },
        setPage : (currentPage)=> {dispatch(setPageAC(currentPage))},


        setUsers: (users)=> {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount : (totalUsersCount)=> {
          dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        showMoreUsers : (currentPage)=> {
            dispatch(showMoreUsersAC(currentPage))
        },
        setNewUsers: (users)=> {
            debugger
            dispatch(setNewUsersAC(users))
        }



    })

}


let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;