import React from 'react';

import s from "./ProfileInfoe.module.css"

import ProfileDescribtionContainer from "../ProfileDescribtion/ProfileDescribtionContainer";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile.profile) {
        return <Preloader/>
    }

    return (

        <div>

            <div className={s.item}>
                <img className={s.content__img} alt=""
                     src="https://cq.ru/storage/uploads/posts/75938/seo-cover-29960.jpg"/>
            </div>
            <ProfileDescribtionContainer/>
        </div>

    )
        ;
}

export default ProfileInfo;