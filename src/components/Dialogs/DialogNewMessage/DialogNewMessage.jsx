import React from "react";
import style from "./DialogNewMessage.module.css";
import appState from "../../../redux/state";




const DialogNewMessage = (props) => {
    let messageText = React.createRef();
    let addNewMessage = () => {


        props.addMessage();

    }
    let updateMessage = () => {
        let text = messageText.current.value;
        props.updateNewMessage(text);
        debugger;
    }


    return (
        <div className={style.newMessage}>
            <textarea className={style.s} ref={messageText} onChange={updateMessage} value={appState.dialogs.newMessageText} placeholder="New message text"/>
            <button className={style.addButton} onClick={addNewMessage}>Send message</button>


        </div>


    )
}
export default DialogNewMessage;