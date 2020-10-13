import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
const Header = (props) => {


    return (

        <div className={s.header}>

            <img className={s.header__logo} alt="" src="/img/logo.png"/>

            {props.auth.isAuth ?  <div className={s.loggedIn_block} >{props.auth.login} </div> :  <div className={s.logIn_link_block} ><NavLink className={s.logIn_link} to={"/login"}>Log In</NavLink></div>}

        </div>


    );
}

export default Header;