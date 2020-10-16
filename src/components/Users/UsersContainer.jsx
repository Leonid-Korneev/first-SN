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



class UsersAPIComponent extends React.Component {


    componentDidMount() {
        this.props.getDefaultUsers(this)
    }

    onPageChanged(pageNumber) {
        this.props.getNewUsers(this, pageNumber)
    }

    onShowMoreClicked(currentPage) {
        this.props.getNewUsers(this, currentPage)
    }

    render() {

        return (
            <>  {this.props.isFetching ? <Preloader/> :
                <Users
                    usersSearch={this.props.usersSearch}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                    onShowMoreClicked={(currentPage) => {this.onShowMoreClicked(currentPage)}}
                    onPageChanged={(pageNumber) => {this.onPageChanged(pageNumber)}}
                    follow = {this.props.follow}
                />}
            </>

        )

    }


}

let mapStateToProps = (state) => {


    return ({
        usersSearch: state.usersSearch,
        currentPage: state.usersSearch.currentPage,
        totalUsersCount: state.usersSearch.totalUsersCount,
        pageSize: state.usersSearch.pageSize,
        isFetching: state.usersSearch.isFetching,
        isFollowingInProgress: state.usersSearch.isFollowingInProgress
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
