import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import DialogNewMessage from "./DialogNewMessage/DialogNewMessage";

import {Route} from "react-router-dom";



const Dialogs = (props) => {

    const dialogsElements = props.state.dialogsData.map(el => <DialogItem name={el.name} id={el.id} avatar={el.avatar} message={el.text}/>);
    const dialog = []

    for (let object of props.state.dialogsData) {
        dialog.push(props.state.dialogsData[object.id-1].messageData.map(el=> <DialogMessage author={el.author} text={el.text}  />   ))
    }

    const dialogsPaths = props.state.dialogsData.map(el=> <Route path={"/dialogs/"+el.id}  render= {()=> <div>{dialog[el.id-1]}</div>} />)

    return (

        <div className={style.content}>
            <div className={style.dialogs}>
                <div className={style.dialogs__items}>
                    {dialogsElements}
                </div>
                <div className={style.dialog__content}>

                    {dialogsPaths}

                </div>




            </div>
            <DialogNewMessage state={props.state} addMessage={props.addMessage} updateNewMessage={props.updateNewMessage} id={props.state.dialogsData.id}/>

        </div>
    )
}
export default Dialogs;