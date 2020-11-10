import s from "./UsersItem.module.css"
import {NavLink} from "react-router-dom";
import avatar from "../../../assets/images/default-avtar.jpg";
import React from "react";


export const UserItem = ({user,followingUsers, follow })=> {


    let followButtonClicked = (user) => {
        follow(user.id,user.followed)
    }

    return (
        <div key={user.id} className={s.user}>


                <NavLink to={"/profile/" + user.id}>
                    <img  className={s.avatar}
                         src={ user.photos.large ?? avatar}
                         alt="ProfileImage"/>
                </NavLink>
            <div className={s.name}>{user.name}</div>
                <button className={s.followBtn} disabled={followingUsers.includes(user.id)} onClick={() => {
                    followButtonClicked(user)
                }}> {user.followed ? "Unfollow" : "Follow"} </button>




        </div>
    )
}