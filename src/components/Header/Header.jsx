import React from 'react';
import s from "./Header.module.css"
import logo from "./../../assets/images/logo.png"
import {NavLink} from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {StylesProvider} from '@material-ui/core/styles';





const Header = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);

    };

    const logOutHandle = () => {
        handleClose()
        props.logOut()
    }


    return (
        <StylesProvider injectFirst>


            <>

                <div className={s.header}>


                    <img className={s.header__logo} alt="" src={logo}/>


                    {props.auth.isAuth ?
                        <div className={s.loggedIn_block}>


                            <div aria-controls="simple-menu" aria-haspopup="true" className={s.profileButton}
                                    onClick={handleClick}>
                                {props.auth.login}
                            </div>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >

                                <MenuItem onClick={logOutHandle}>Logout</MenuItem>
                            </Menu>


                        </div>
                        :
                        <div className={s.logInLinkBlock}><NavLink className={s.logIn_link} to={"/login"}>Log
                            In</NavLink>
                        </div>}


                </div>

            </>

        </StylesProvider>


    );
}

export default Header;