import React from "react";
import style from "../../Users/Users.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../../assets/images/default-avtar.jpg";

export const FriendsItem = ({friend, follow, followingUsers}) => {
    let followButtonClicked = () => {
        follow(friend.id, friend.followed)
    }

    return (<div key={friend.id} className={style.user}>

        <div className={style.icon}>
            <NavLink to={"/profile/" + friend.id}>
                <img className={style.avatar}
                     src={friend.photos.small ?? avatar}
                     alt="ProfileImage"/>
            </NavLink>
            <button className={style.follow_btn} disabled={followingUsers.includes(friend.id)} onClick={() => {
                followButtonClicked(friend)
            }}> {friend.followed ? "Unfollow" : "Follow"} </button>
        </div>

        <div className={style.content}>
            <div className={style.name}>{friend.name}</div>
            <div className={style.status}>{friend.status}</div>
        </div>
    </div>)
}


