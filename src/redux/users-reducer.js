
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = "SET_USERS"
let initialState = {
    users: []

}
export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, isFollowed: !user.isFollowed}
                    } else {
                        return user
                    }
                })
            }

        }

        case SET_USERS : {
            return {...state, users: [...state.users, ...action.users]}
        }


        default : {
            return state
        }

    }

}

export default usersReducer;

