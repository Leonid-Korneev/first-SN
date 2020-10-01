import React from "react";

import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import DialogNewMessage from "./DialogNewMessage";



const DialogNewMessageContainer = (props) => {


    let addNewMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action)


    }
    let updateMessage = (text) => {
       let action = updateNewMessageTextActionCreator(text);

        props.dispatch(action);
    }


    return (
     <DialogNewMessage  addMessageActionCreator={addNewMessage}   updateNewMessageTextActionCreator={updateMessage} dialogs={props.dialogs}    />


    )
}
export default DialogNewMessageContainer;