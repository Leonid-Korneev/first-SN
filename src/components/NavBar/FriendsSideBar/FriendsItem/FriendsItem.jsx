import React from 'react';
import s from "./FriendsItem.module.css"
import {NavLink} from "react-router-dom";


const FriendsItem = (props) => {

    return (
        <NavLink className={s.link} to={"/profile/" + props.id}>
            <div className={s.item}>
                <img alt="avatar" src={props.avatar} className={s.avatar}/>
                <div className={s.name}>{props.name}</div>
            </div>
        </NavLink>

    )
}

export default FriendsItem;