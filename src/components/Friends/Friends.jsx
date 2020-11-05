import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    getCurrentPage, getFollowingInProgress,
    getFriendsSelector,
    getFriendsTotalCount, getIsFetching,
    getPageSize
} from "../../redux/friends-selectors";
import {FriendsItem} from "./FriendsItem/FriendsItem";

import {getFollowingUsers} from "../../redux/users-selectors";
import Pagination from "@material-ui/lab/Pagination";
import style from "../Users/Users.module.css";
import {changePage, follow, getFriends} from "../../redux/friends-reducer";
import Preloader from "../common/Preloader/Preloader";


const Friends = ({friends, followingUsers, totalFriendsCount, pageSize, currentPage, follow, changePage, getFriends, isFetching,followingInProgress}) => {
    debugger
    useEffect(() => {
        getFriends()
    }, [])
    let pages = Math.ceil(totalFriendsCount / pageSize)

    return (
        <>
            {isFetching ? <Preloader/> : <> {friends.map((friend) => (
                <FriendsItem key={friend.id} friend={friend} followingUsers={followingUsers} followingInProgress={followingInProgress} follow={follow}/>))}
                <Pagination className={style.pag} count={pages} page={currentPage} onChange={(e, page) => {
                    changePage(page)
                }}/></>}
        </>
    )
}

const mapStateToProps = (state) => ({
    friends: getFriendsSelector(state),
    totalFriendsCount: getFriendsTotalCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    followingUsers: getFollowingUsers(state),
    isFetching: getIsFetching(state),
    followingInProgress : getFollowingInProgress(state)

})

const mapDispatchToProps = {
    follow,
    changePage,
    getFriends
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)