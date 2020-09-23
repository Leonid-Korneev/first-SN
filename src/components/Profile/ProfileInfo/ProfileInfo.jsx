import React from 'react';

import s from "./ProfileInfoe.module.css"

const ProfileInfo = () => {
    return (
    <div >
        <div className={s.item}>
            <img className={s.content__img} alt="" src="https://cq.ru/storage/uploads/posts/75938/seo-cover-29960.jpg"/>
        </div>
        <div className={s.item}>
            ava+descr
        </div>
    </div>

)
    ;
}

export default ProfileInfo;