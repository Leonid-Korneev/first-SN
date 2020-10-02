import React from 'react';

import s from "./ProfileDescribtion.module.css";

const ProfileDescribtion = (props) => {
    debugger;
    let state = props.profile.profileInfo

    return (
        <div className={s.item}>
            <div><img className={s.avatar} alt="avatar"
                      src="https://svirtus.cdnvideo.ru/RXYqectI4SSltlLXVwigGWuNH3I=/0x0:770x330/1200x1200/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/95/950154e588a56a266eb1566d4d86f78a.jpg?m=563e4830a89f6ebc00077efd8b08f382"/>
            </div>
            <div className={s.info}>
                <p className={s.name}> Name: {state.name}</p>
                <p className={s.birthDate}> Date Of Birth: {state.birthDate}</p>
                <p className={s.city}>City:{state.city}</p>
                <p className={s.education}>Education:{state.education}</p>
                <p className={s.webSite}>Personal Website:{state.website}</p>


            </div>
        </div>
    );
}

export default ProfileDescribtion;