import React from "react";
import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";





const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={style.dialog}>

            <NavLink   activeClassName={style.activeDialog} className={style.link} to={path}> <img alt="avatar" className={style.avatar} src={props.avatar}/> {props.name}  </NavLink>
        </div>


    )
}

export default DialogItem;