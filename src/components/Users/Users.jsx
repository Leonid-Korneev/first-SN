import React from "react";
import style from "./Users.module.css";
import avatar from "../../assets/images/default-avtar.jpg";

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


    return (
        <div className={style.users__content}>

            {props.usersSearch.users.map((user) => {

                return (
                    <div className={style.user}>
                        <div className={style.icon}>
                            <img className={style.avatar}
                                 src={(user.photos.small != null) ? user.photos.small : avatar}
                                 alt="ProfileImage"/>

                            <button className={style.follow_btn} onClick={() => {

                                props.followToggle(user.id)
                            }}>{user.followed ? "Unfollow" : "Follow"}</button>


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