import React from "react";
import style from "./DialogNewMessage.module.css";




const DialogNewMessage = (props) => {

    let addNewMessage = () => {
       props.addMessageActionCreator();


    }
    let updateMessage = (event) => {

        let text = event.target.value

        props.updateNewMessageTextActionCreator(text);
    }


    return (
        <div className={style.newMessage}>
            <textarea className={style.s}  onChange={updateMessage}
                      value={props.dialogs.newMessageText} placeholder="Enter your message"/>
            <button className={style.addButton} onClick={addNewMessage}>Send message</button>


        </div>


    )
}
export default DialogNewMessage;