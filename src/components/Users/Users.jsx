import React from "react";
import style from "./Users.module.css"


let Users = (props) => {
    debugger
    if (props.usersSearch.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatar: "https://i.pinimg.com/474x/8d/5c/b8/8d5cb8f030f5c4edfc1785d9d09668ed.jpg",
                isFollowed: true,
                fullName: "Leonid K.",
                status: "My status is empty",
                location: {country: "Russia", city: "Irkutsk"}

            },
            {
                id: 2,
                avatar: "https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg",
                isFollowed: false,
                fullName: "Sasha K.",
                status: "What should I do?",
                location: {country: "Russia", city: "Irkutsk"}

            },
            {
                id: 3,
                avatar: "https://i.pinimg.com/originals/fc/2b/17/fc2b1740c218d870aa9ec0be0760d93e.jpg",
                isFollowed: true,
                fullName: "Nastya M.",
                status: "Hi there!",
                location: {country: "Russia", city: "Irkutsk"}

            },

        ])
    }


    return (
        <div>
            {props.usersSearch.users.map((user) => {
                return (
                    <div className={style.user}>
                        <div className={style.icon}>
                            <img className={style.avatar}
                                 src={user.avatar}
                                 alt="ProfileImage"/>

                            <button className={style.follow_btn} onClick={() => {
                                props.followToggle(user.id)
                            }}>{user.isFollowed ? "Unfollow" : "Follow"}</button>


                        </div>
                        <div className={style.content}>
                            <div className={style.name}>{user.fullName}</div>
                            <div className={style.country}>{user.location.country},</div>
                            <div className={style.status}>{user.status}</div>
                            <div className={style.city}>{user.location.city}</div>
                        </div>
                    </div>
                )


            })}
        </div>


    )
}


export default Users;



