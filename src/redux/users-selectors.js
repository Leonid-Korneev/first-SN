
import {createSelector} from "reselect";

export const getCurrentPage = (state)=>   state.usersSearch.currentPage
export const getUsersSearchSelector = (state)=> state.usersSearch.users
export const getUsers = createSelector(getUsersSearchSelector,(users)=>  users.filter(el=>true)   )
export const getTotalUsersCount = (state)=> state.usersSearch.totalUsersCount
export const getPageSize = (state)=> state.usersSearch.pageSize
export const checkFetching  = (state)=> state.usersSearch.isFetching
export const getIsFollowingInProgress = (state)=> state.usersSearch.isFollowingInProgress
export const getFollowingUsers = (state)=> state.usersSearch.followingUsers
export const getCurrentFilter = (state)=> state.usersSearch.currentFilter