import React from 'react';
import s from "./Header.module.css"
const Header = () => {
    return (
        <header className={s.header}>
        <img class={s.header__logo} src="img/logo.png"></img>
      </header>


    );
}

export default Header;