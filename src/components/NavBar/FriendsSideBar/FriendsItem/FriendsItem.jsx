import React from 'react';
import s from "./FriendsItem.module.css"


const FriendsItem = (props) => {

    return (
     <div className={s.item}>
        <img alt="avatar" src={props.avatar} className={s.avatar}/>
        <div className={s.name}>{props.name}</div>
     </div>
    );
}

export default FriendsItem;