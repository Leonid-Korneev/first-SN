import React, {useState} from 'react';
import s from "./ProfileDescribtion.module.css";
import avatar from "../../../assets/images/default-avtar.jpg";
import Preloader from "../../common/Preloader/Preloader";
import Status from "../ProfileInfo/Status";
import {Modal} from "@material-ui/core";
import {MainPhotoEdit} from "../MainPhotoEdit/MainPhotoEdit";


const ProfileDescribtion = ({userId, ...props}) => {

    let [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    let profile = props.profile.profile
    let socialMediaArr = !props.profile.profile ? [] : Object.entries(props.profile.profile.contacts)

    return (


        <>  {
            !props.profile.profile ? <Preloader/> :
                <div className={s.item}>


                    <div className={s.avatar_block}><img className={s.avatar} alt="avatar"

                                                         src={(profile.photos.large) ?? avatar}/>
                        <button onClick={handleOpen}>Change Avatar</button>
                    </div>
                    {(userId === props.authorizedUserId) ? <div>

                    </div> : null}
                    <Modal
                        open={open}
                        onClose={handleClose}>
                        <MainPhotoEdit handleClose={handleClose} savePhoto={props.savePhoto}/>
                    </Modal>


                    <div className={s.info}>
                        <p className={s.name}> Name: {profile.fullName}</p>


                        <p className={s.education}><span className={s.title}>Status:</span> <Status {...props}/></p>
                        <div>
                            {profile.lookingForAJob ? <div className={s.item}><span className={s.title}>Информация по трудоустройству:</span> {profile.lookingForAJobDescription}
                            </div> : ""}


                            {<h4 className={s.item}>Social Media :</h4>}
                            {socialMediaArr.map((el) => {
                                if (el[1]) {
                                    return <div>
                                        <p><span className={s.title}>{el[0]}:</span> <span className={s.soc_item}>{<a
                                            href={el[1]}> {el[1]} </a>}</span></p>
                                    </div>
                                } else {
                                    return null
                                }

                            })}

                        </div>


                    </div>
                </div>}


        </>
    );
}

export default ProfileDescribtion;