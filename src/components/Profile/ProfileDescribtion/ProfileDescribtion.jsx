import React, {useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileDescribtion.module.css"
import {Modal} from "@material-ui/core";
import {MainPhotoEdit} from "./MainPhotoEdit/MainPhotoEdit";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileAvatarBlock} from "./ProfileInfo/ProfileAvatarBlock";
import ProfileEditing from "./ProfileEditing/ProfileEditing";


const ProfileDescribtion = ({userId, profile, ...props}) => {
    const [profileEditingPhoto, setProfileEditingPhoto] = useState(false)
    const [profileEditingInfoMode, setProfileEditingInfoMode] = useState(false)
    const handleOpen = () => {
        setProfileEditingPhoto(true)
    }
    const handleClose = () => {
        setProfileEditingPhoto(false)
    }
    const isOwner = userId === props.authorizedUserId
    return (
        <>  {
            !profile ? <Preloader/> :
                <div className={s.profileWrapper}>
                    {
                        <> <ProfileAvatarBlock profile={profile}
                                               isOwner={isOwner} setProfileEditingInfoMode={setProfileEditingInfoMode}
                                               setProfileEditingPhoto={setProfileEditingPhoto}/>
                            <Modal
                                open={profileEditingPhoto}
                                onClose={handleClose}>
                                <MainPhotoEdit handleClose={handleClose} savePhoto={props.savePhoto}/>
                            </Modal>
                            {profileEditingInfoMode ?
                                <ProfileEditing setProfileEditingInfoMode={setProfileEditingInfoMode}
                                                profile={profile}/>
                                : <ProfileInfo profile={profile}
                                               isOwner={isOwner} {...props} />}
                        </>}
                </div>
        }
        </>
    );
}


export default ProfileDescribtion;