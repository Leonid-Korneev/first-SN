import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";


import {Route} from "react-router-dom";
import DialogNewMessageContainer from "./DialogNewMessage/DialogNewMessageContainer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const Dialogs = (props) => {


    const dialogsElements = props.dialogs.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id} avatar={el.avatar}
                                                                            message={el.text}/>);
    const dialog = []
    for (let object of props.dialogs.dialogsData) {
        dialog.push(props.dialogs.dialogsData[object.id - 1].messageData.map(el => <DialogMessage  key={el.id} author={el.author}
                                                                                                  text={el.text}/>))
    }

    const dialogsPaths = props.dialogs.dialogsData.map(el => <Route key={el.id} path={"/dialogs/" + el.id}
                                                                    render={() => <div>{dialog[el.id - 1]}</div>}/>)


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


            <Route path={"/dialogs/*"} render={() => <DialogNewMessageContainer/>}/>


        </div>
    )
}
export default withAuthRedirect(Dialogs) ;