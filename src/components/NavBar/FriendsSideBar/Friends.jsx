import React from 'react';
import s from "./Friends.module.css"
import defAvatar from "./../../../assets/images/default-avtar.jpg"
import FriendsItem from "./FriendsItem/FriendsItem";
import {NavLink} from "react-router-dom";

const Friends = ({friends}) => {
    debugger

    let friendsArray

    if(friends.friends) {
        friendsArray = friends.friends.map(friend=><FriendsItem  key= {friend.id} name={friend.name} id={friend.id} avatar={friend.photos.small?? defAvatar  }/>)
    }


    return (
        <div>
           <NavLink className={s.main__link}  to={"/friends"}> <h3 >Friends</h3></NavLink>
            <div className={s.container}>
                {friendsArray}
            </div>

        </div>
    );

}


export default Friends;
