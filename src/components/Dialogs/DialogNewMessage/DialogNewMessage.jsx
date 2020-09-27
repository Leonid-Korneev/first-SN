import React from "react";
import style from "./DialogNewMessage.module.css";




const DialogNewMessage = () => {
    let massageText = React.createRef();
    let addNewMassage = () => { alert(massageText.current.value) }


    return (
        <div className={style.newMessage}>
            <textarea className={style.s} ref={massageText} placeholder="New message text"></textarea>
            <button className={style.addButton} onClick={addNewMassage}>Send message</button>


        </div>


    )
}
export default DialogNewMessage;