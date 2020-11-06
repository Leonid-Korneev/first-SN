import React from 'react';
import s from "./Header.module.css"
import logo from "./../../assets/images/logo.png"
import {NavLink} from "react-router-dom";


const Header = (props) => {


    return (








        <div className={s.header}>
            <img className={s.header__logo} alt="" src={logo}/>





            {props.auth.isAuth ?
                <div className={s.loggedIn_block}>{props.auth.login}
                    <button onClick={props.logOut}>Log out</button>
                </div>
                :
                <div className={s.logIn_link_block}><NavLink className={s.logIn_link} to={"/login"}>Log In</NavLink>
                </div>}

        </div>


    );
}

export default Header;