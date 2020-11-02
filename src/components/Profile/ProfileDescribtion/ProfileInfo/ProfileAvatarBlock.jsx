import React from "react";

import avatar from "../../../../assets/images/default-avtar.jpg";



export const ProfileAvatarBlock = ({profile,isOwner,setProfileEditingPhoto})=> {
    debugger

    const handleOpen = () => {
        setProfileEditingPhoto(true)
    }
    const handleClose = () => {
        setProfileEditingPhoto(false)
    }


    return (


        <div ><img  alt="avatar" src={(profile.photos.large) ?? avatar}/>
        { isOwner && <button onClick={handleOpen}>Change Avatar</button> }
        </div>    )
}