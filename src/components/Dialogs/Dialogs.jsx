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

    const messageData = [
        {id: 1, text:"Hi"},
        {id: 2, text:"Hello there"},
        {id: 3, text:"How is it going"},
        {id: 4, text:"What's up?"},
        {id: 5, text:"Bye"}
    ];

    return (
        <div className={style.content}>
            <div className={style.dialogs}>
                <div className={style.dialogs__items}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    {/*<DialogItem name="Leo" id="1"/>*/}
                    {/*<DialogItem name="Dima" id="2"/>*/}
                    {/*<DialogItem name="Nastya" id="3"/>*/}
                    {/*<DialogItem name="Sasha" id="4"/>*/}
                    {/*<DialogItem name="Papich" id="5"/>*/}
                </div>
                <div className={style.dialogs__messages}>

                    <DialogMessage message={messageData[0].text}/>
                    {/*<DialogMessage message="Hi"/>*/}
                    {/*<DialogMessage message="Hello there!"/>*/}
                    {/*<DialogMessage message="How is it going?"/>*/}
                    {/*<DialogMessage message="What's up?"/>*/}
                    {/*<DialogMessage message="Bye"/>*/}


                </div>

            </div>

        </div>
    )
}
export default Dialogs;