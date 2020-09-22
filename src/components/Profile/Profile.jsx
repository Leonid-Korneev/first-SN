import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.css"
const Profile = () => {
    return (
        <div className={s.content}>
        <div> <img className={s.content__img} src="https://cq.ru/storage/uploads/posts/75938/seo-cover-29960.jpg" />
        </div>
        <div>
          ava+descr
        </div>
        <MyPosts/>
      </div>

    );
}

export default Profile;