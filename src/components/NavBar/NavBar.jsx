import React from 'react';
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (


        <nav className={s.nav}>


            <div className={s.linkBlock}>
                <NavLink to="/profile/" activeClassName={s.active} className={s.link}>Profile</NavLink>
            </div>
            <div className={s.linkBlock}>
                <NavLink to="/users" activeClassName={s.active} className={s.link}>Users</NavLink>
            </div>
            <div className={s.linkBlock}>
                <NavLink to="/dialogs" activeClassName={s.active} className={s.link}>Messages</NavLink>
            </div>
            <div className={s.linkBlock}>
                <NavLink to="/news" activeClassName={s.active} className={s.link}>News</NavLink>
            </div>
            <div className={s.linkBlock}>
                <NavLink to="/music" activeClassName={s.active} className={s.link}>Music</NavLink>
            </div>
            <div className={s.linkBlock}>
                <NavLink to="/settings" activeClassName={s.active} className={s.link}>Settings</NavLink>
            </div>


        </nav>

    );
}

export default NavBar;