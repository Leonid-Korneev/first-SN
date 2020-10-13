import {connect} from "react-redux";
import React from "react";
import Users from "./Users";

import {
    setNewUsers,
    setPage,
    setTotalUsersCount,
    setUsers,
    showMoreUsers,
    toggleFollow, toggleIsFetching,
} from "../../redux/users-reducer";


import Preloader from "../common/Preloader/Preloader";
import {users} from "../../api/api";


class UsersAPIComponent extends React.Component {


    componentDidMount() {

        this.props.toggleIsFetching(true)

        users.getUsers.call(this)
            .then((data) => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
                this.props.setTotalUsersCount(data.totalCount)

            })

    }

    onPageChanged(pageNumber) {

        this.props.setPage(pageNumber)
        this.props.toggleIsFetching(true)
        users.getUsers.call(this, pageNumber).then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)

        })
    }

    onShowMoreClicked(currentPage) {

        this.props.showMoreUsers(currentPage)
        this.props.toggleIsFetching(true)
        users.getUsers.call(this, currentPage)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setNewUsers(response.data.items)
            })
    }

    render() {


        return (

            <>  {this.props.isFetching ? <Preloader/> :
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
                        this.props.toggleFollow(userId)
                    }}


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
        isFetching: state.usersSearch.isFetching
    })
}

let mapDispatchToProps = {

    toggleFollow,
    setPage,
    setUsers,
    setTotalUsersCount,
    showMoreUsers,
    setNewUsers,
    toggleIsFetching,


}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;
