import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";


const Dialogs = (props) => {
    debugger;
    const dialogsElements = props.dialogsData.map(el =>  <DialogItem name={el.name} id={el.id}/>);
    const messageElements = props.messageData.map(el =>  <DialogMessage message={el.text}/>);

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