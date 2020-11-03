import React from "react";
import style from "./Users.module.css";
import Pagination from '@material-ui/lab/Pagination';
import {UserItem} from "./UserItem/UserItem";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";



const Users = ({totalUsersCount,pageSize,that,users,followingUsers,follow,currentPage,onShowMoreClicked,onPageChanged}) => {



    let pages = Math.ceil(totalUsersCount / pageSize)
    let pagesButton = []
    for (let i = 1; i <= pages; i++) {
        pagesButton.push(<span className={(currentPage === i) && style.selected} onClick={() => {
            onPageChanged(i)
        }}>{i}|</span>)
    }


    return (
        <div className={style.users__content}>
            <UsersSearchForm that={that} />

            {users.map((user) =>
                <UserItem key={user.id} user={user} followingUsers={followingUsers} follow={follow}/>
            )}

           <Pagination className={style.pag} count={pages} page={currentPage} onChange={(e, page) => {

                    onShowMoreClicked(page)

            }}/>

        </div>
    )
}

export default Users;