import React from "react";
import {useForm} from "react-hook-form";

import {connect} from "react-redux";
import {updateUserInfo} from "../../../../redux/profile-reducer";
import {stringFirstCharToUpperCase} from "../../../../utils/functions/stringFirstCharToUpperCase";
import {parseErrorString} from "../../../../utils/functions/parseErrorString";
import s from "./ProfileEditing.module.css"
import Button from "@material-ui/core/Button";


const ProfileEditing = ({profile, setProfileEditingInfoMode, updateUserInfo}) => {

    const {register, setError, handleSubmit, errors, clearErrors} = useForm();


    const onSubmit = async (updatedProfileInfo) => {
        try {
            let response = await updateUserInfo(updatedProfileInfo)
        } catch (message) {
            setError(parseErrorString(message, "Contacts->"), {
                    type: "manual",
                    message: "This field had invalid URL"
                }
            )
        }
    }


    const onCancelClick = () => {

        setProfileEditingInfoMode(false)
    }

    return (
        <div className={s.profileEditingWrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className={s.inputField}><b>Full name:</b> <input ref={register} name='fullName'
                                                                       defaultValue={profile.fullName} type="text"/>
                </div>

                {errors.facebook && <p>{errors.facebook.message}</p>}

                <div className={s.inputField}><b>Professional skills:</b> <textarea className={s.textArea}
                                                                                    ref={register}
                                                                                    name='lookingForAJobDescription'
                                                                                    defaultValue={profile.lookingForAJobDescription}/>
                </div>
                <div className={s.inputField}><b>Are you looking for a job?</b>


                    <div className={s.radioWrapper}> <label> Yes </label> <input ref={register} name='lookingForAJob' value={true}
                                                      defaultChecked={profile.lookingForAJob} type="radio"/>
                        <label> No </label> <input ref={register} name='lookingForAJob' value={false}
                                                   defaultChecked={!profile.lookingForAJob} type="radio"/></div>


                </div>
                <div className={s.inputField}><b>Tell us about yourself</b> <textarea className={s.textArea} ref={register} name='aboutMe'
                                                             defaultValue={profile.aboutMe}
                /></div>
                <div><h4>Social Media</h4>
                    {Object.keys(profile.contacts).map((media, i) => (
                        <div className={s.inputField} key={i}><b>{stringFirstCharToUpperCase(media)+":"}</b> <input
                            onChange={() => {
                                if (errors[media]) {
                                    clearErrors()
                                }
                            }} className={errors[media] && s.errorField} ref={register} name={"contacts." + media}
                            defaultValue={profile.contacts[media]}

                            type="text"/> {errors[media] &&
                        <label>{errors[media].message}</label>} </div>))}


                </div>
                <div className={s.buttonsWrapper}>
                <Button className={s.button} type="submit">Save</Button>
                <Button className={s.button} onClick={onCancelClick}>Cancel</Button>
                </div>


            </form>
        </div>)
}


const mapStateToProps = () => ({})
const mapDispatchToProps = {
    updateUserInfo
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditing)
