
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = "SET_USERS"
const SET_PAGE = "SET_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SHOW_MORE_USERS = "SHOW_MORE_USERS"
const SET_NEW_USERS = "SET_NEW_USERS"

let initialState = {
    users: [],
    currentPage:1,
    totalUsersCount:0,
    pageSize : 6

}
export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setNewUsersAC = (users) => ({type: SET_NEW_USERS, users})
export const setPageAC = (currentPage) => ({type:SET_PAGE, currentPage })
export const setTotalUsersCountAC = (count) => ({type:SET_TOTAL_USERS_COUNT, count })
export const showMoreUsersAC = (currentPage) => ({type:SHOW_MORE_USERS, currentPage })

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

        default : {
            return state
        }

    }

}

export default usersReducer;

