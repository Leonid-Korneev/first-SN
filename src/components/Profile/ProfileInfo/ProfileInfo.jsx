import React from 'react';

import s from "./ProfileInfoe.module.css"
import ProfileDescribtion from "../ProfileDescribtion/ProfileDescribtion";

const ProfileInfo = (props) => {

    return (
    <div >
        <div className={s.item}>
            <img className={s.content__img} alt="" src="https://cq.ru/storage/uploads/posts/75938/seo-cover-29960.jpg"/>
        </div>
        <ProfileDescribtion state={props.store.profileInfo}/>
    </div>

)
    ;
}

export default ProfileInfo;