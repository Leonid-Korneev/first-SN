import {followUser, friendsApi} from "../api/api";


const SET_FRIENDS = "SET_FRIENDS"
const SET_PAGE = "SET_PAGE"
const SET_SIDEBAR_FRIENDS = "SET_SIDEBAR_FRIENDS"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"
const TOGGLE_FOLLOW_FRIEND = "TOGGLE_FOLLOW_FRIEND"
let initialState = {

    friends: [],
    totalFriendsCount: 0,
    pageSize: 4,
    currentPage: 1,
    sideBarFriends: [],
    sideBarFriendsQuantity: 6,
    isFetching: false,
    followingInProgress: false,


}

export const setFriends = (friends, totalFriendsCount) => ({type: SET_FRIENDS, friends, totalFriendsCount})
export const setSideBarFriends = (sideBarFriends) => ({type: SET_SIDEBAR_FRIENDS, sideBarFriends})
export const setPage = (newPage) => ({type: SET_PAGE, newPage})
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW_FRIEND, userId})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFollowingInProgress) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFollowingInProgress
})

export const changePage = (newPage) => (dispatch) => {


    dispatch(setPage(newPage))
    dispatch(getFriends())


}

export const follow = (userId, isFollowed) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true))
    let response = isFollowed ? await followUser.unfollow(userId) : await followUser.follow(userId)
    if (response.data.resultCode === 0) {

        dispatch(toggleFollow(userId))

    }
    dispatch(toggleFollowingInProgress(false))


}


//thunks AC

export const getFriends = () => async (dispatch, getState) => {

    dispatch(toggleIsFetching(true))
    let quantity = getState().friends.pageSize
    let currentPage = getState().friends.currentPage
    let response = await friendsApi.getFriends(quantity, currentPage)
    dispatch(setFriends(response.items, response.totalCount))

    dispatch(toggleIsFetching(false))


}

export const getSideBarFriends = () => async (dispatch, getState) => {


    dispatch(toggleIsFetching(true))
    let quantity = getState().friends.sideBarFriendsQuantity
    let currentPage = 1
    let response = await friendsApi.getFriends(quantity, currentPage)
    dispatch(setSideBarFriends(response.items))
    dispatch(toggleIsFetching(false))


}


const friendsReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_FRIENDS: {
            return {...state, friends: [...action.friends], totalFriendsCount: action.totalFriendsCount}

        }
        case SET_PAGE: {
            return {...state, currentPage: action.newPage}

        }

        case SET_SIDEBAR_FRIENDS: {
            return {...state, sideBarFriends: action.sideBarFriends}

        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}

        }
        case TOGGLE_FOLLOWING_IN_PROGRESS : {
            return {...state, followingInProgress: action.isFollowingInProgress}
        }
        case TOGGLE_FOLLOW_FRIEND : {
            return {
                ...state, friends: state.friends.map(friend => {
                    if (friend.id === action.userId)
                        return {...friend, followed: !friend.followed}
                    else {
                        return friend
                    }

                })
            }
        }


        default : {
            return state
        }
    }
}
export default friendsReducer;