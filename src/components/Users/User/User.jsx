import style from "../Users.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../../assets/images/default-avtar.jpg";
import React from "react";

export const User = ({user,followingUsers, follow })=> {

    let followButtonClicked = (user) => {
        follow(user.id,user.followed)
    }

    return (
        <div key={user.id} className={style.user}>

            <div className={style.icon}>
                <NavLink to={"/profile/" + user.id}>
                    <img className={style.avatar}
                         src={ user.photos.small ?? avatar}
                         alt="ProfileImage"/>
                </NavLink>

                <button className={style.follow_btn} disabled={followingUsers.includes(user.id)} onClick={() => {
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
}