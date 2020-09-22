import React from 'react';
import s from "./Profile.module.css"
const Profile = () => {
    return (
        <div className={s.content}>
        <div> <img className={s.content__img} src="https://cq.ru/storage/uploads/posts/75938/seo-cover-29960.jpg" />
        </div>
        <div>
          ava+descr
        </div>
        <div>
          Mypost <div>
            NewPost
          </div>

          <div className={s.item}>post1</div>
          <div className={s.item}>post1</div>
        </div>

      </div>

    );
}

export default Profile;