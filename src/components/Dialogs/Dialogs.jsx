import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={style.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>


    )
}
const DialogMessage = (props) => {
    return (
        <div className={style.message__item}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    return (
        <div className={style.content}>
            <div className={style.dialogs}>
                <div className={style.dialogs__items}>
                    <DialogItem name="Leo" id="1" />
                    <DialogItem name="Dima" id="2" />
                    <DialogItem name="Nastya" id="3" />
                    <DialogItem name="Sasha" id="4" />
                    <DialogItem name="Papich" id="5" />
                    </div>
                <div className={style.dialogs__messages}>
                    <DialogMessage message="Hi"/>
                    <DialogMessage message="Hello there!"/>
                    <DialogMessage message="How is it going?"/>
                    <DialogMessage message="What's up?"/>
                    <DialogMessage message="Bye"/>


                </div>

            </div>

        </div>
    )
}
export default Dialogs;