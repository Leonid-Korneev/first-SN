import React from "react";
import style from "./Users.module.css"
import * as axios from "axios";
import avatar from "./../../assets/images/default-avtar.jpg"


class Users extends React.Component {




    componentDidMount() {
          axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`).then((response) => {
              this.props.setUsers(response.data.items)

              this.props.setTotalUsersCount(response.data.totalCount)
          })

    }
    onPageChanged(pageNumber) {
        this.props.setPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
        })
    }
    onShowMoreClicked(currentPage) {
        this.props.showMoreUsers(currentPage)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setNewUsers(response.data.items)
        })
    }

    render() {
        // let totalUsersCount = this.props.totalUsersCount
        // let pageSize = this.props.pageSize
        // let pages = Math.ceil(totalUsersCount/pageSize)
        // let pagesButton = []
        // for(let i=1;i<=pages;i++){
        //     pagesButton.push(<span className={ (this.props.currentPage===i) && style.selected } onClick={()=>{this.onPageChanged(i)}}   >{i}</span>)
        // };

        return (
            <div className={style.users__content}>
                {/*{pagesButton}*/}
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
                <span><button className={style.showMore} onClick={()=>{this.onShowMoreClicked(this.props.currentPage+1)}}>Show more users</button></span>
            </div>
        )

    }


}


export default Users;



