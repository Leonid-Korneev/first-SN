import React from "react";
import style from "./../Dialogs.module.css";




const DialogMessage = (props) => {
    return (
        <div className={style.message__item}>{props.message}</div>
    )
}

export default DialogMessage;