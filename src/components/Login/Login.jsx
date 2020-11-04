import React from "react";
import s from "./Login.module.css"
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {useForm} from "react-hook-form";



export let LoginForm = (props) => {
    const { register, handleSubmit } = useForm();


    let onSubmit = (formData) => {

        props.logIn(formData)





    }
    if(props.isAuth) {return <Redirect to={"/profile"}/>}
    return  (

        <div className={s.form__container}>

            {  props.successfulLog===false  ?  <div className={s.form__error}>{props.errorMessages}</div> : undefined}
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>

                <div className={s.form__item}><input ref={register({ required: true })} name="email"    type="text" placeholder="email"/></div>
                <div className={s.form__item}><input ref={register({ required: true })} name="password"  type="password"  placeholder="password"/></div>

                {props.captchaUrl&&
                <div  className={s.form__item}>
                    <img src={props.captchaUrl} alt=""/>
                    <input ref={register} name="captcha"  type="text"  placeholder="Enter symbols here..."/></div>}

                <div className={s.form__item }><input ref={register} name="remember-me"  type="checkbox" /><label>Remember me</label></div>
                <div className={s.form__item__button}><button type="submit">Log-In</button></div>

            </form>
        </div>


    )
}



let mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.isAuth,
        successfulLog: state.auth.successfulLog,
        errorMessages : state.auth.errorMessages,
        captchaUrl: state.auth.captchaUrl
    }
}
let mapDispatchToProps = {
    logIn,

}

LoginForm= connect(mapStateToProps,mapDispatchToProps)(LoginForm)
