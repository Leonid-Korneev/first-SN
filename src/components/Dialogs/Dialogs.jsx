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
    const dialogsData = [
        {id: 1, name: "Leo"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Nastya"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Papich"}];


    const dialogsElements = dialogsData.map((el) => el = <DialogItem name={el.name} id={el.id}/>
    );

    const messageData = [
        {id: 1, text: "Hi"},
        {id: 2, text: "Hello there"},
        {id: 3, text: "How is it going"},
        {id: 4, text: "What's up?"},
        {id: 5, text: "Bye"}
    ];
    const messageElements = messageData.map((el) => el = <DialogMessage message={el.text}/>
    )

    return (
        <div className={style.content}>
            <div className={style.dialogs}>
                <div className={style.dialogs__items}>
                    {dialogsElements}

                </div>
                <div className={style.dialogs__messages}>

                    {messageElements}


                </div>

            </div>

        </div>
    )
}
export default Dialogs;