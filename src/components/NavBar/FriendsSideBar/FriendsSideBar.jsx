import React from 'react';
import s from "./FriendsSideBar.module.css"
import defAvatar from "./../../../assets/images/default-avtar.jpg"
import FriendsSideBarItem from "./FriendsSideBarItem/FriendsSideBarItem";
import {NavLink} from "react-router-dom";

const FriendsSideBar = ({friends}) => {


    let friendsArray

    if(friends) {
        friendsArray = friends.map(friend=><FriendsSideBarItem key= {friend.id} name={friend.name} id={friend.id} avatar={friend.photos.small?? defAvatar  }/>)
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


export default FriendsSideBar;
