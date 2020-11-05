import React from 'react';
import s from "./FriendsSideBarItem.module.css"
import {NavLink} from "react-router-dom";
import {Avatar} from "@material-ui/core";
import {StylesProvider} from "@material-ui/styles";
import {makeStyles} from "@material-ui/core/styles";


const classNames = require("classnames");


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));


const FriendsSideBarItem = (props) => {


    const classes = useStyles();



    return (

        <StylesProvider injectFirst>
            <NavLink className={s.link} to={"/profile/" + props.id}>
                <div className={s.item}>
                    <Avatar alt={props.name}  src={props.avatar} className={classNames(s.avatar, classes.large)} />


                    <div className={s.name}>{props.name}</div>
                </div>
            </NavLink>
        </StylesProvider>

    )
}

export default FriendsSideBarItem;