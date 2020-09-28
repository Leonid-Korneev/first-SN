import React from "react";
import style from "./DialogMessage.module.css";




const DialogMessage = (props) => {
    return (
        <div className={style.message__item}>{props.author+" "+props.text }</div>
    )
}

export default DialogMessage;