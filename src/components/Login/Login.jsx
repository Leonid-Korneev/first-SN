import React from "react";
import {Form, Field} from 'react-final-form'
import s from "./Login.module.css"
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";



export let LoginForm = (props) => {
    let onSubmit = (data) => {
        props.logIn(data)

    }

    return (
        <Form onSubmit={onSubmit}>
            {props => (
               <div className={s.form__container}>
                   <form className={s.form} onSubmit={props.handleSubmit}>
                       <div className={s.form__item}><Field name="email" component="input" type="text" placeholder="email"/></div>
                       <div className={s.form__item}><Field name="password" component="input" type="password" placeholder="password"/></div>
                       <div className={s.form__item}><Field name="remember-me" component="input" type="checkbox" placeholder="password"/><label>Remember me</label></div>
                       <div className={s.form__item__button}><button type="submit">Log-In</button></div>
                   </form>
               </div>
            )}
        </Form>
    )
}



let mapStateToProps = ()=> {
    return {}
}
let mapDispatchToProps = {
    logIn
}

LoginForm= connect(mapStateToProps,mapDispatchToProps)(LoginForm)
