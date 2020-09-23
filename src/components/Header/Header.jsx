import React from 'react';
import s from "./Header.module.css"
const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header__logo} alt="" src="/img/logo.png"/>

        </header>


    );
}

export default Header;