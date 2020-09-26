import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";


const Dialogs = (props) => {

    const dialogsElements = props.state.dialogsData.map(el =>  <DialogItem name={el.name} id={el.id} avatar={el.avatar}/>);
    const messageElements = props.state.messageData.map(el =>  <DialogMessage message={el.text}/>);
    debugger;
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