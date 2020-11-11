import {followUser, usersApiRequster} from "../api/api";


const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = "SET_USERS"
const SET_PAGE = "SET_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SHOW_MORE_USERS = "SHOW_MORE_USERS"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING"
const SET_CURRENT_FILTER = "SET_CURRENT_FILTER"

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 12,
    isFetching: false,
    isFollowingInProgress: false,
    followingUsers: [],
    currentFilter: "",
    isShowingFriends: false


}
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const setCurrentFilter = (filter) => ({type: SET_CURRENT_FILTER, filter})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setPage = (currentPage) => ({type: SET_PAGE, currentPage})
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count})
export const showMoreUsers = (currentPage) => ({type: SHOW_MORE_USERS, currentPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowing = (isFollowingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING,
    isFollowingInProgress,
    userId
})
export const getDefaultUsers = (context) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await usersApiRequster.getUsers.call(context)
        dispatch(setUsers(data.items))
        dispatch(toggleIsFetching(false))
        dispatch(setTotalUsersCount(data.totalCount))

    }

}
export const getNewUsers = (context, page, currentFilter) => {
    return async (dispatch) => {

        dispatch(showMoreUsers(page))
        dispatch(toggleIsFetching(true))
        let response = await usersApiRequster.getUsers.call(context, page, currentFilter)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.data.items))

    }
}
export const getFilteredUsers = (searchInfo, currentPage, context) => async (dispatch) => {
    dispatch(setCurrentFilter(searchInfo))
    dispatch(toggleIsFetching(true))
    let response = await usersApiRequster.getUsers.call(context, 1, searchInfo)

    dispatch(setUsers(response.data.items))
    dispatch(toggleIsFetching(false))
    dispatch(setTotalUsersCount(response.data.totalCount))


}


export const follow = (userId, isFolowed) => {


    return (dispatch) => {

        dispatch(toggleFollowing(true, userId))
        isFolowed ? followUser.unfollow(userId).then((response) => {
                dispatch(toggleFollowing(false, userId))
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollow(userId))

                }

            })
            : followUser.follow(userId).then((response) => {
                dispatch(toggleFollowing(false, userId))
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollow(userId))

                }

            })

    }
}
const usersReducer = (state = initialState, action) => {


    switch (action.type) {

        case TOGGLE_FOLLOW: {

            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    } else {
                        return user
                    }
                })
            }

        }

        case SET_USERS : {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_FILTER : {
            return {...state, currentFilter: action.filter}
        }

        case SET_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case SHOW_MORE_USERS: {

            return {...state, currentPage: action.currentPage}

        }
        case TOGGLE_IS_FETCHING: {

            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING : {


            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress,
                followingUsers: action.isFollowingInProgress ? [...state.followingUsers, action.userId] : [...state.followingUsers].filter(id => id !== action.userId)
            }


        }

        default : {
            return state
        }

    }

}

export default usersReducer;

