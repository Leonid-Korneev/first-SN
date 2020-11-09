import React from "react";
import s from "../ProfileDescribtion.module.css"

import Status from "./Status";
import {SocialMedia} from "./SocialMedia";
import {stringFirstCharToUpperCase} from "../../../../utils/functions/stringFirstCharToUpperCase";



export const ProfileInfo = ({profile, isOwner, setProfileEditingInfoMode, ...props}) => {


    const contacts = profile?.contacts


    return (profile &&
        <div className={s.profileInfoWrapper}>
            <div className={s.name}> {profile.fullName}  <div className={s.status}> <Status isOwner={isOwner} {...props}/></div>
            </div>

            <div>
                {profile.lookingForAJob ? (
                        <div className={s.jobBlock}>
                            <div>I am looking for a job right now!</div>
                            <div><strong>My professional skills:</strong> {profile.lookingForAJobDescription}</div>
                        </div>)
                    : <div>I am not looking for a job right now.</div>}
                {profile.aboutMe &&<div><b>About me:</b> {profile.aboutMe} </div>}


                <div className={s.socialMediaWrapper}>   {Object.keys(contacts).map(key => contacts[key] ? <SocialMedia key={key} socialMediaTitle={
                    stringFirstCharToUpperCase(key)} socialMediaLink={contacts[key]}/> : null)}</div>


            </div>

        </div>)
}