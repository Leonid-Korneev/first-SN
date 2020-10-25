import React from "react";
import style from "./Users.module.css";
import Pagination from '@material-ui/lab/Pagination';
import {User} from "./User/User";


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


    return (
        <div className={style.users__content}>
            {props.users.map((user) =>
                <User key={user.id} user={user} followingUsers={props.followingUsers} follow={props.follow}/>
            )}

           <Pagination className={style.pag} count={pages} page={props.currentPage} onChange={(e, page) => {

                    props.onShowMoreClicked(page)

            }}/>

        </div>
    )
}

export default Users;