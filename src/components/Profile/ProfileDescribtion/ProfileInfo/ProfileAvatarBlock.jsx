import React, {useState} from "react";
import s from "../ProfileDescribtion.module.css"
import avatar from "../../../../assets/images/default-avtar.jpg";
import Button from "@material-ui/core/Button";
import {StylesProvider} from "@material-ui/core/styles";



export const ProfileAvatarBlock = ({profile,isOwner,setProfileEditingPhoto,setProfileEditingInfoMode})=> {

    const [editAvatarMode, setEditAvatarMode] = useState(false)
    const onEditClick= ()=> {
        setProfileEditingInfoMode(true)
    }

    const handleOpen = () => {
        setProfileEditingPhoto(true)
    }


    return (
        <StylesProvider injectFirst>

        <div className={s.avatarBlock}   >
            <div className={s.avatar__wrapper} onMouseEnter={()=>{setEditAvatarMode(true)}}  onMouseLeave={()=>{setEditAvatarMode(false)}} >
            <img className={s.avatar}   alt="avatar" src={(profile.photos.large) ?? avatar}   />

        { isOwner && editAvatarMode && <button className={s.editPhoto__btn}   onClick={handleOpen}>Change Avatar</button> }
            </div>
            {isOwner && <div>
                <Button variant="outlined"  className={s.editInfoBtn} onClick={onEditClick}>edit info</Button>
            </div> }
        </div>

            </StylesProvider >)
}

