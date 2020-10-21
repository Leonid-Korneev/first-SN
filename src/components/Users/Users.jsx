import React from "react";
import style from "./Users.module.css";
import avatar from "../../assets/images/default-avtar.jpg";
import {NavLink} from "react-router-dom";
import Pagination  from '@material-ui/lab/Pagination';


const Users = (props) => {

    let totalUsersCount = props.totalUsersCount
    let pageSize = props.pageSize
    let pages = Math.ceil(totalUsersCount / pageSize)
    let pagesButton = []
    for (let i = 1; i <= pages; i++) {
        pagesButton.push(<span className={(props.currentPage === i) && style.selected} onClick={() => {
            props.onPageChanged(i)
        }}>{i}|</span>)
    }

    let followButtonClicked = (user) => {
        props.follow(user.id,user.followed)
    }

    return (
        <div className={style.users__content}>

            {props.usersSearch.users.map((user) => {

                return (

                    <div className={style.user}>

                        <div className={style.icon}>
                            <NavLink to={"/profile/" + user.id}>
                                <img className={style.avatar}
                                     src={ user.photos.small ?? avatar}
                                     alt="ProfileImage"/>
                            </NavLink>

                            <button className={style.follow_btn} disabled={props.usersSearch.followingUsers.includes(user.id)} onClick={() => {
                                followButtonClicked(user)
                            }}> {user.followed ? "Unfollow" : "Follow"} </button>


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
            {/*<div className={style.pages}>      {pagesButton} </div>*/}
            <div className={style.pag}><Pagination count={pages}  page={props.currentPage}  onChange={ (e,page)=>{{

                debugger
                props.onShowMoreClicked(page)
            }}  }/></div>
            {/*<span><button className={style.showMore} onClick={() => {*/}
            {/*    props.onShowMoreClicked(props.page)*/}
            {/*}}>Show more users</button></span>*/}
        </div>
    )
}

export default Users;