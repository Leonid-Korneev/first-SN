import React from "react";
import style from "./Users.module.css"
import * as axios from "axios";
import avatar from "./../../assets/images/default-avtar.jpg"


class Users extends React.Component {


    constructor(props) {

        super(props)

        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=3").then((response) => {this.props.setUsers(response.data.items)})

    }



render()
{
    return (
        <div>

            {this.props.usersSearch.users.map((user) => {
                return (
                    <div className={style.user}>
                        <div className={style.icon}>
                            <img className={style.avatar}
                                 src={(user.photos.small != null) ? user.photos.small : avatar}
                                 alt="ProfileImage"/>

                            <button className={style.follow_btn} onClick={() => {
                                this.props.followToggle(user.id)
                            }}>{user.followed ? "Unfollow" : "Follow"}</button>


                        </div>
                        <div className={style.content}>
                            <div className={style.name}>{user.name}</div>
                            <div className={style.country}>{"user.location.country"},</div>
                            <div className={style.status}>{user.status}</div>
                            <div className={style.city}>{"user.location.city"}</div>
                        </div>
                    </div>
                )


            })}
        </div>
    )

}


}


export default Users;



