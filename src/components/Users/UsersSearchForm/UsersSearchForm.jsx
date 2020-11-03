import React from "react";
import {useForm} from "react-hook-form";
import s from "./UsersSearchForm.module.css"
import {connect} from "react-redux";
import {getFilteredUsers} from "../../../redux/users-reducer";


const UsersSearchForm = ({getFilteredUsers, currentPage, that}) => {
    const {register, handleSubmit,} = useForm();

    const onSubmit = formData => getFilteredUsers(
        formData.searchField, currentPage, that);


    return (
        <div className={s.search__wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className={s.search__field} name="searchField" placeholder="Enter user name..." ref={register}/>
                <button type="submit">Find</button>
            </form>
        </div>)
}
const mapStateToProps = (state) => {


    return ({currentPage: state.usersSearch.currentPage})
}

const mapDispatchToProps = {
    getFilteredUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersSearchForm)