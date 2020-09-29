import React from "react";
import style from "./DialogNewMessage.module.css";





const DialogNewMessage = (props) => {
    let messageText = React.createRef();
    let addNewMessage = () => {


        props.store.addMessage();

    }
    let updateMessage = () => {
        let text = messageText.current.value;
        props.store.updateNewMessage(text);
        debugger;
    }


    return (
        <div className={style.newMessage}>
            <textarea className={style.s} ref={messageText} onChange={updateMessage} value={props.store.appState.dialogs.newMessageText} placeholder="New message text"/>
            <button className={style.addButton} onClick={addNewMessage}>Send message</button>


        </div>


    )
}
export default DialogNewMessage;