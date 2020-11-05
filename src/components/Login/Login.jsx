import React from "react";
import s from "./Login.module.css"
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {useForm} from "react-hook-form";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {StylesProvider} from '@material-ui/core/styles';

const cln = require('classnames');


export let LoginForm = (props) => {
    const {register, handleSubmit} = useForm();


    let onSubmit = (formData) => {


        props.logIn(formData)


    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <StylesProvider injectFirst>
            <div className={s.form__container}>


                <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    {props.successfulLog === false ? <div className={cln(s.form__item,s.form__error) }>{props.errorMessages}</div> : undefined}
                    <div className={s.form__item}>
                        <TextField inputRef={register({required: true})} name="email" type="text"
                                   placeholder="Email" label="Email" variant="outlined" required/>


                    </div>
                    <div className={s.form__item}><TextField inputRef={register({required: true})} name="password"
                                                             type="password"
                                                             placeholder="password" label="Password" variant="outlined"
                                                             required/></div>
                    {props.captchaUrl &&
                    <div className={s.form__item}>
                        <img src={props.captchaUrl} alt=""/>
                        <TextField className={s.form__item} inputRef={register} name="captcha" type="text" placeholder="Code"
                                   label="Code" variant="outlined"/></div>}
                    <div className={s.form__item}><div><input ref={register} name="remember-me" type="checkbox"/><label>Remember
                        me</label></div></div>
                    <div className={s.form__item}>

                        <Button className={s.submit__button} type="submit" variant="contained" color="primary">
                            Log-In
                        </Button>
                    </div>

                </form>
            </div>
        </StylesProvider>

    )
}


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        successfulLog: state.auth.successfulLog,
        errorMessages: state.auth.errorMessages,
        captchaUrl: state.auth.captchaUrl
    }
}
let mapDispatchToProps = {
    logIn,

}

LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm)
