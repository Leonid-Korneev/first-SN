import React from "react";
import { Form, Field } from 'react-final-form'
import s from "./Login.module.css"

let LoginForm = (props) => {

    return (
        <div className={s.zalupa}>

            <form className={s.form}  onSubmit={props.handleSubmit}>

                    <div className={s.form_item}><Field name="email" component="input" type="email" placeholder="email"/></div>
                    <div className={s.form_item}><Field name="password" component="input" type="password" placeholder="password"/></div>
                    <div className={s.form_item}>
                        <Field name="remember-me" component="input" type="checkbox" placeholder="password"/>
                        <label>Remember me</label>
                    </div>
                    <div className={s.form_item}>
                        <button type="submit">Log-In</button>
                    </div>


            </form>

        </div>

    )
}
let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


export const Login = () => {
    let onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>

            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}