import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {
    setNewUsersAC,
    setPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    showMoreUsersAC,
    toggleFollowAC,
} from "../../redux/users-reducer";

import * as axios from "axios";


class UsersAPIComponent extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)

            this.props.setTotalUsersCount(response.data.totalCount)

        })

    }

    onPageChanged(pageNumber) {
        this.props.setPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
        })
    }

    onShowMoreClicked(currentPage) {

        this.props.showMoreUsers(currentPage)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setNewUsers(response.data.items)
        })
    }

    render() {


        return (
            <Users
                usersSearch={this.props.usersSearch}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onShowMoreClicked={(currentPage) => {
                    this.onShowMoreClicked(currentPage)
                }}
                onPageChanged={(pageNumber) => {
                    this.onPageChanged(pageNumber)
                }}
                followToggle={(userId) => {
                    this.props.followToggle(userId)
                }}

            />

        )

    }


}

let mapStateToProps = (state) => {


    return ({
        usersSearch: state.usersSearch,
        currentPage: state.usersSearch.currentPage,
        totalUsersCount: state.usersSearch.totalUsersCount,
        pageSize: state.usersSearch.pageSize,

    })
}

let mapDispatchToProps = (dispatch) => {
    return ({
        followToggle: (userId) => {
            dispatch(toggleFollowAC(userId))
        },
        setPage: (currentPage) => {
            dispatch(setPageAC(currentPage))
        },


        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        showMoreUsers: (currentPage) => {
            dispatch(showMoreUsersAC(currentPage))
        },
        setNewUsers: (users) => {

            dispatch(setNewUsersAC(users))
        }


    })

}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;
