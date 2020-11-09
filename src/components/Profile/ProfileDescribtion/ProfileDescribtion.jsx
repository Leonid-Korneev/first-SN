import React, {useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileDescribtion.module.css"
import {MainPhotoEdit} from "./MainPhotoEdit/MainPhotoEdit";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileAvatarBlock} from "./ProfileInfo/ProfileAvatarBlock";
import ProfileEditing from "./ProfileEditing/ProfileEditing";
import Friends from "./Friends/Friends";


const ProfileDescribtion = ({userId, profile, authorizedUserId, ...props}) => {
    const [profileEditingPhoto, setProfileEditingPhoto] = useState(false)
    const [profileEditingInfoMode, setProfileEditingInfoMode] = useState(false)


    const isOwner = userId === authorizedUserId
    return (
        <>  {
            !profile ? <Preloader/> :

                <>
                    <div className={s.profileWrapper}>
                        {
                            <> <ProfileAvatarBlock profile={profile}
                                                   isOwner={isOwner} setProfileEditingInfoMode={setProfileEditingInfoMode}
                                                   setProfileEditingPhoto={setProfileEditingPhoto}/>

                                <MainPhotoEdit profileEditingPhoto={profileEditingPhoto} setProfileEditingPhoto={setProfileEditingPhoto}  savePhoto={props.savePhoto}/>


                                {profileEditingInfoMode ?
                                    <ProfileEditing setProfileEditingInfoMode={setProfileEditingInfoMode}
                                                    profile={profile}/>
                                    : <ProfileInfo profile={profile}
                                                   isOwner={isOwner} {...props} />}




                            </>}


                    </div>

                    {/*{isOwner &&      <Friends />}*/}
                </>





        }



        </>
    );
}


export default ProfileDescribtion;