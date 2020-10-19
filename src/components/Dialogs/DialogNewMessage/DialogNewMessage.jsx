import React from "react";
import style from "./DialogNewMessage.module.css";
import {Field, Form} from "react-final-form";
import s from "../../Profile/MyPosts/MyPosts.module.css";
import {required} from "../../../utils/validators/validators";


const DialogNewMessage = (props) => {

    let onSubmit = (data) => {
        props.addMessage(data.messageText)
    }



    return (
        <div className={style.newMessage}>

            <Form onSubmit={onSubmit} render={
                ({handleSubmit, form}) => {
                    return (
                        <form onSubmit={(e) => {
                                let promise = new Promise((resolve => {
                                    handleSubmit(e);
                                    resolve()
                                }))
                                promise.then(() => {
                                    form.reset()
                                })
                            }
                        }>
                           <div className={s.newMessage__container}>
                               <Field className={s.textarea} name={"messageText"} component={"textarea"} validate={required} placeholder={"Enter new message..."}/>
                               <button className={style.send_btn} type={"submit"}>Send Message</button>
                           </div>
                        </form>)}}/>


        </div>


    )
}
export default DialogNewMessage;