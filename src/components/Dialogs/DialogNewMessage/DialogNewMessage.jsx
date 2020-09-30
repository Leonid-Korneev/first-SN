import React from "react";
import style from "./DialogNewMessage.module.css";


const DialogNewMessage = (props) => {
    let messageText = React.createRef();
    let addNewMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"})


    }
    let updateMessage = () => {
        let text = messageText.current.value;

        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text});
    }


    return (
        <div className={style.newMessage}>
            <textarea className={style.s} ref={messageText} onChange={updateMessage}
                      value={props.dialogs.newMessageText} placeholder="New message text"/>
            <button className={style.addButton} onClick={addNewMessage}>Send message</button>


        </div>


    )
}
export default DialogNewMessage;