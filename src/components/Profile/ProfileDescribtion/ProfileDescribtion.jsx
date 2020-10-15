import React from 'react';
import s from "./ProfileDescribtion.module.css";
import avatar from "../../../assets/images/default-avtar.jpg";
import Preloader from "../../common/Preloader/Preloader";
import Status from "../ProfileInfo/Status";


const ProfileDescribtion = (props) => {

    let state = props.profile.profileInfo
    let profile = props.profile.profile

    return (


        <>  {props.isFetching ? <Preloader/> :
            <div className={s.item}>


                <div><img className={s.avatar} alt="avatar"

                          src={(profile.photos.large) ? profile.photos.large : avatar}/>
                </div>
                <div className={s.info}>
                    <p className={s.name}> Name: {profile.fullName}</p>
                    <p className={s.birthDate}> Date Of Birth: {state.birthDate}</p>
                    <p className={s.city}>City:{state.city}</p>
                    <p className={s.education}>Education:{state.education}</p>
                    <div className={s.education}>Status:  <Status status={profile.aboutMe}/></div>
                    <div>
                        <h4 className={s.item}>Social Media</h4>
                        <p className={s.socialMedia_item}>VK: <label
                            className={s.social_url}>{profile.contacts.vk}</label></p>
                        <p className={s.socialMedia_item}>twitter: <label
                            className={s.social_url}>{profile.contacts.twitter}</label></p>
                        <p className={s.socialMedia_item}>instagram: <label
                            className={s.social_url}>{profile.contacts.instagram}</label></p>
                        <p className={s.socialMedia_item}>github: <label
                            className={s.social_url}>{profile.contacts.github}</label></p>
                        <p className={s.socialMedia_item}>facebook: <label
                            className={s.social_url}>{profile.contacts.facebook}</label></p>

                    </div>


                </div>
            </div>}


        </>
    );
}

export default ProfileDescribtion;