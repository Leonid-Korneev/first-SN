import React from 'react';
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";
import FriendsContainer from "./FriendsSideBar/FriendsContainer";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" activeClassName={s.active} className={s.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={s.active} className={s.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={s.active} className={s.item}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={s.active} className={s.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" activeClassName={s.active} className={s.item}>Settings</NavLink>
            </div>
            <div>
                <NavLink to="/users" activeClassName={s.active} className={s.item}>Users</NavLink>
            </div>

            <div className={s.friends}><FriendsContainer/></div>


        </nav>

    );
}

export default NavBar;