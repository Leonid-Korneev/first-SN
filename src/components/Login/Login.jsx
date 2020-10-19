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
                        <form className={s.form} onSubmit={handleSubmit}>
                            <div className={s.form__item}><Field name="email" component={customFormElement} validate={required} fieldType="input" type="text" placeholder="email"/></div>
                            <div className={s.form__item}><Field name="password" component="input" type="password" placeholder="password"/></div>
                            <div className={s.form__item}><Field name="remember-me" component="input" type="checkbox" placeholder="password"/><label>Remember me</label></div>
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
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = {
    logIn,

}

LoginForm= connect(mapStateToProps,mapDispatchToProps)(LoginForm)
