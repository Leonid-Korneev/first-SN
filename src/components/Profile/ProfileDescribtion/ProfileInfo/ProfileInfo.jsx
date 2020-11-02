import React from "react";


import Status from "./Status";
import {SocialMedia} from "./SocialMedia";
import {stringFirstCharToUpperCase} from "../../../../utils/functions/stringFirstCharToUpperCase";



export const ProfileInfo = ({profile, isOwner, setProfileEditingInfoMode, ...props}) => {
    const onEditClick= ()=> {
        setProfileEditingInfoMode(true)
    }

    const contacts = profile ? profile.contacts : null


    return (profile &&
        <>
            <div><b>Name:</b> {profile.fullName}</div>
            <div><b>Статус:</b> <Status isOwner={isOwner} {...props}/></div>

            <div>
                {profile.lookingForAJob ? (
                        <>
                            <div>Нахожусь в поиске работы!</div>
                            <div><strong>Информация по
                                трудоустройству:</strong> {profile.lookingForAJobDescription}</div>
                        </>)
                    : <div>В данный момент работу не ищу.</div>}
                {profile.aboutMe &&<div><b>About me:</b> {profile.aboutMe} </div>}
                {Object.keys(contacts).map(key => contacts[key] ? <SocialMedia key={key} socialMediaTitle={
                    stringFirstCharToUpperCase(key)} socialMediaLink={contacts[key]}/> : null)}
            </div>
            {isOwner && <div>
                <button onClick={onEditClick}>Edit</button>
            </div>}
        </>)
}