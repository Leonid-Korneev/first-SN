import React from "react";
import style from "../../Users/UserItem/UsersItem.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../../assets/images/default-avtar.jpg";

export const FriendsItem = ({friend, follow,  followingInProgress,disabledList}) => {

    let followButtonClicked = () => {
        follow(friend.id, friend.followed)
    }

    return (<div key={friend.id} className={style.user}>
            <NavLink to={"/profile/" + friend.id}>
                <img className={style.avatar}
                     src={friend.photos.small ?? avatar}
                     alt="ProfileImage"/>
            </NavLink>

        <div className={style.name}>{friend.name}</div>
            <button className={style.followBtn} disabled={disabledList.includes(friend.id)} onClick={() => {
                followButtonClicked(friend)
            }}> {friend.followed ? "Unfollow" : "Follow"} </button>





    </div>)
}


