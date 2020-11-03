import {connect} from "react-redux";
import React from "react";
import Users from "./Users";

import {
    follow,
    getDefaultUsers, getNewUsers,
    setPage,
    showMoreUsers,
    toggleFollow, toggleFollowing
} from "../../redux/users-reducer";


import Preloader from "../common/Preloader/Preloader";
import {
    checkFetching, getCurrentFilter,
    getCurrentPage, getFollowingUsers, getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount, getUsers

} from "../../redux/users-selectors";


class UsersAPIComponent extends React.Component {


    componentDidMount() {
        this.props.getDefaultUsers(this)
    }

    onPageChanged(pageNumber) {
        this.props.getNewUsers(this, pageNumber)
    }

    onShowMoreClicked(currentPage) {

        this.props.getNewUsers(this, currentPage,this.props.currentFilter)
    }

    render() {

        return (
            <>  {this.props.isFetching ? <Preloader/> :
                <Users
                    that = {this}
                    users={this.props.users}

                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    followingUsers={this.props.followingUsers}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                    onShowMoreClicked={(currentPage) => {
                        this.onShowMoreClicked(currentPage)
                    }}
                    onPageChanged={(pageNumber) => {
                        this.onPageChanged(pageNumber)
                    }}
                    follow={this.props.follow}
                />}
            </>

        )

    }


}

let mapStateToProps = (state) => {


    return ({
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        isFetching: checkFetching(state),
        followingUsers: getFollowingUsers(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
        currentFilter: getCurrentFilter(state)
    })
}

let mapDispatchToProps = {


    toggleFollow,
    setPage,
    showMoreUsers,
    toggleFollowing,
    getDefaultUsers,
    getNewUsers,
    follow

}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;
