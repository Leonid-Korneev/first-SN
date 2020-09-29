import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import DialogNewMessage from "./DialogNewMessage/DialogNewMessage";

import {Route} from "react-router-dom";



const Dialogs = (props) => {

    const dialogsElements = props.store.appState.dialogs.dialogsData.map(el => <DialogItem name={el.name} id={el.id} avatar={el.avatar} message={el.text}/>);
    const dialog = []

    for (let object of props.store.appState.dialogs.dialogsData) {
        dialog.push(props.store.appState.dialogs.dialogsData[object.id-1].messageData.map(el=> <DialogMessage author={el.author} text={el.text}  />   ))
    }

    const dialogsPaths = props.store.appState.dialogs.dialogsData.map(el=> <Route path={"/dialogs/"+el.id}  render= {()=> <div>{dialog[el.id-1]}</div>} />)

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
            <DialogNewMessage store={props.store}/>

        </div>
    )
}
export default Dialogs;