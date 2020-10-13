import React from "react";
import style from "./Users.module.css";
import avatar from "../../assets/images/default-avtar.jpg";
import {NavLink} from "react-router-dom";
import {followUser} from "../../api/api";


const Users = (props) => {

    let totalUsersCount = props.totalUsersCount
    let pageSize = props.pageSize
    let pages = Math.ceil(totalUsersCount / pageSize)
    let pagesButton = []
    for (let i = 1; i <= pages; i++) {
        pagesButton.push(<span className={(props.currentPage === i) && style.selected} onClick={() => {
            props.onPageChanged(i)
        }}>{i}|</span>)
    }

    let followButtonClicked = (user) => {
        if (user.followed) {
            followUser.unfollow.call(this, user.id).then((response) => {
                if (response.data.resultCode === 0) {
                    props.followToggle(user.id)
                }

            })
        } else {
            followUser.follow.call(this, user.id).then((response) => {
                if (response.data.resultCode === 0) {
                    props.followToggle(user.id)
                }

            })
        }


    }

    return (
        <div className={style.users__content}>

            {props.usersSearch.users.map((user) => {

                return (
                    <div className={style.user}>

                        <div className={style.icon}>
                            <NavLink to={"/profile/" + user.id}>
                                <img className={style.avatar}
                                     src={ user.photos.small ?? avatar}
                                     alt="ProfileImage"/>
                            </NavLink>
                            <button className={style.follow_btn} onClick={() => {
                                followButtonClicked(user)
                            }}> {user.followed ? "Unfollow" : "Follow"} </button>


                        </div>
                        <div className={style.content}>
                            <div className={style.name}>{user.name}</div>
                            <div className={style.country}>{"user.location.country"},</div>
                            <div className={style.status}>{user.status}</div>
                            <div className={style.city}>{"user.location.city"}</div>
                        </div>
                    </div>
                )


            })}
            {/*<div className={style.pages}>      {pagesButton} </div>*/}
            <span><button className={style.showMore} onClick={() => {
                props.onShowMoreClicked(props.currentPage + 1)
            }}>Show more users</button></span>
        </div>
    )
}

export default Users;