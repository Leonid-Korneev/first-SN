import React, {useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
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
                <>
                    {
                        <> <ProfileAvatarBlock profile={profile}
                                               isOwner={isOwner}  setProfileEditingPhoto={setProfileEditingPhoto}/>
                            <Modal
                                open={profileEditingPhoto}
                                onClose={handleClose}>
                                <MainPhotoEdit handleClose={handleClose} savePhoto={props.savePhoto}/>
                            </Modal>
                            {profileEditingInfoMode ?
                                  <ProfileEditing setProfileEditingInfoMode={setProfileEditingInfoMode}
                                                profile={profile}/>
                                : <ProfileInfo profile={profile} setProfileEditingInfoMode={setProfileEditingInfoMode}
                                               isOwner={isOwner} {...props} />}
                        </>}
                </>
        }
        </>
    );
}


export default ProfileDescribtion;