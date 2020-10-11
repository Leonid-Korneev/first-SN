
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = "SET_USERS"
const SET_PAGE = "SET_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SHOW_MORE_USERS = "SHOW_MORE_USERS"
const SET_NEW_USERS = "SET_NEW_USERS"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
    users: [],
    currentPage:1,
    totalUsersCount:0,
    pageSize : 3,
    isFetching: true

}
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW,  userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setNewUsers = (users) => ({type: SET_NEW_USERS, users})
export const setPage = (currentPage) => ({type:SET_PAGE, currentPage })
export const setTotalUsersCount = (count) => ({type:SET_TOTAL_USERS_COUNT, count })
export const showMoreUsers = (currentPage) => ({type:SHOW_MORE_USERS, currentPage })
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching })

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
            return {...state, users: [ ...action.users]}
        }
        case SET_NEW_USERS : {
            return {...state, users: [ ...state.users,...action.users]}
        }
        case SET_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case SHOW_MORE_USERS: {

            return {...state,  currentPage: state.currentPage+1}

        }
        case TOGGLE_IS_FETCHING: {

               return {...state, isFetching: action.isFetching}
        }

        default : {
            return state
        }

    }

}

export default usersReducer;

