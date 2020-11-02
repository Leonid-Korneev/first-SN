import React from "react";
import {useForm} from "react-hook-form";

import {connect} from "react-redux";
import {updateUserInfo} from "../../../../redux/profile-reducer";
import {stringFirstCharToUpperCase} from "../../../../utils/functions/stringFirstCharToUpperCase";
import {parseErrorString} from "../../../../utils/functions/parseErrorString";
import s from "./ProfileEditing.module.css"


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

    return (<form onSubmit={handleSubmit(onSubmit)}>

        <div><b>Full name:</b> <input ref={register} name='fullName' defaultValue={profile.fullName} type="text"/></div>

        {errors.facebook && <p>{errors.facebook.message}</p>}

        <div><b>Professional skills:</b> <textarea ref={register} name='lookingForAJobDescription'
                                                   defaultValue={profile.lookingForAJobDescription} /></div>
        <div><b>Are you looking for a job?</b>
            <label> Yes </label> <input ref={register} name='lookingForAJob' value={true}
                                        defaultChecked={profile.lookingForAJob} type="radio"/>
            <label> No </label> <input ref={register} name='lookingForAJob' value={false}
                                       defaultChecked={!profile.lookingForAJob} type="radio"/>
        </div>
        <div><b>Tell us about yourself</b> <textarea ref={register} name='aboutMe' defaultValue={profile.aboutMe}
                                                     /></div>
        <div><h4>Social Media</h4>
            {Object.keys(profile.contacts).map((media, i) => (
                <div key={i}><b>{stringFirstCharToUpperCase(media)}</b> <input onChange={() => {
                    if (errors[media]) {
                        clearErrors()
                    }
                }} className={errors[media] && s.errorField} ref={register} name={"contacts." + media}
                                                                               defaultValue={profile.contacts[media]}

                                                                               type="text"/> {errors[media] &&
                <label>{errors[media].message}</label>} </div>))}


        </div>

        <button type="submit">Save</button>
        <button onClick={onCancelClick}>Cancel</button>


    </form>)
}


const mapStateToProps = () => ({})
const mapDispatchToProps = {
    updateUserInfo
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditing)
