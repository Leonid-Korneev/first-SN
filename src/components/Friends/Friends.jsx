import React from "react";
import {connect} from "react-redux";
import {getcurrentPage, getFriends, getFriendsTotalCount, getPageSize} from "../../redux/friends-selectors";
import {FriendsItem} from "./FriendsItem/FriendsItem";
import {follow} from "../../redux/users-reducer";
import {getFollowingUsers} from "../../redux/users-selectors";
import Pagination from "@material-ui/lab/Pagination";
import style from "../Users/Users.module.css";
import {changePage} from "../../redux/friends-reducer";


const Friends = ({friends, followingUsers, totalFriendsCount, pageSize, currentPage, follow,changePage }) => {

    let pages = Math.ceil(totalFriendsCount / pageSize)


    return (
        <>

            {friends.map((friend) => (<FriendsItem friend={friend} followingUsers={followingUsers} follow={follow}/>))}

            <Pagination className={style.pag} count={pages} page={currentPage} onChange={(e, page) => {

                changePage(page)

            }}/>

        </>
    )

}

const mapStateToProps = (state) => ({
    friends: getFriends(state),
    totalFriendsCount: getFriendsTotalCount(state),
    pageSize: getPageSize(state),
    currentPage: getcurrentPage(state),
    followingUsers: getFollowingUsers(state),
})

const mapDispatchToProps = {
    follow,
    changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)