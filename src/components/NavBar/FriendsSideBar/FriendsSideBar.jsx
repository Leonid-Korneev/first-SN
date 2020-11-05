import React, {useEffect} from 'react';
import s from "./FriendsSideBar.module.css"
import defAvatar from "./../../../assets/images/default-avtar.jpg"
import FriendsSideBarItem from "./FriendsSideBarItem/FriendsSideBarItem";
import {NavLink} from "react-router-dom";
import {getSideBarFriends} from "../../../redux/friends-reducer";
import {connect} from "react-redux";



const FriendsSideBar = ({friends,getSideBarFriends,}) => {


        useEffect( ()=> {getSideBarFriends()}  ,[])
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
const mapDispatchToProps = {
    getSideBarFriends
}
const mapStateToProps = (state)=> ({
    friendsArr: state.friends,
    friends: state.friends.sideBarFriends
})

export default connect(mapStateToProps,mapDispatchToProps) (FriendsSideBar);
