import React from 'react';
import s from "./Friends.module.css"

import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {
    debugger;
    const friendInfo = props.state.friendsItemData.map(el =>  <FriendsItem name={el.name} id={el.id} avatar={el.avatar} />)
    debugger;
    return (
     <div>
         <h3>Friends</h3>
        <div className={s.container}>
            {friendInfo}
        </div>

     </div>
    );
}

export default Friends;