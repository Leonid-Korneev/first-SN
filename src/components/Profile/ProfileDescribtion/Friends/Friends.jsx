import React from 'react';
import s from "./Friends.module.css"
import defAvatar from "../../../../assets/images/default-avtar.jpg"
import FriendsItem from "./FriendsItem/FriendsItem";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getSideBarFriends} from "../../../../redux/friends-reducer";


const Friends = ({friends}) => {


    let friendsArray = friends?.map(friend => <FriendsItem key={friend.id} name={friend.name} id={friend.id}
                                                           avatar={friend.photos.small ?? defAvatar}/>)

    return (
        <div className={s.friendsBlock}>
            <NavLink className={s.main__link} to={"/friends"}><h3 className={s.title}>Friends</h3></NavLink>
            <div className={s.container}>
                {friendsArray}
            </div>

        </div>
    );

}
const mapDispatchToProps = {
    getSideBarFriends
}
const mapStateToProps = (state) => ({
    friendsArr: state.friends,
    friends: state.friends.sideBarFriends
})

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
