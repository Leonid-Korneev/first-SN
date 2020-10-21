import React from "react";
import {Form, Field} from 'react-final-form'
import s from "./Login.module.css"
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";
import {customFormElement} from "../common/FormControls/FromControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";



export let LoginForm = (props) => {
    let onSubmit = (formData,form) => {

        props.logIn(formData)
        setTimeout(form.restart)




    }
    if(props.isAuth) {return <Redirect to={"/profile"}/>}
    return  (


        <Form onSubmit={onSubmit}  render={
            ({handleSubmit})=> {

                return (
                    <div className={s.form__container}>

                        {  props.successfulLog===false  ?  <div className={s.form__error}>{props.errorMessages}</div> : undefined}
                        <form className={s.form} onSubmit={handleSubmit}>

                            <div className={s.form__item}><Field name="email" component={customFormElement} validate={required} fieldType="input" type="text" placeholder="email"/></div>
                            <div className={s.form__item}><Field name="password" component={customFormElement} validate={required} type="password" fieldType="input" placeholder="password"/></div>
                            <div className={s.form__item}><Field name="remember-me" component="input" type="checkbox" placeholder="password" defaultValue="true"/><label>Remember me</label></div>
                            <div className={s.form__item__button}><button type="submit">Log-In</button></div>
                        </form>
                    </div>
                )
            }
        }/>


    )
}



let mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.isAuth,
        successfulLog: state.auth.successfulLog,
        errorMessages : state.auth.errorMessages
    }
}
let mapDispatchToProps = {
    logIn,

}

LoginForm= connect(mapStateToProps,mapDispatchToProps)(LoginForm)
