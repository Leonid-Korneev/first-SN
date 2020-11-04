import {friendsApi} from "../api/api";


const SET_FRIENDS = "SET_FRIENDS"
const SET_PAGE = "SET_PAGE"
const SET_SIDEBAR_FRIENDS = "SET_SIDEBAR_FRIENDS"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
let initialState = {

    friends: [],
    totalFriendsCount: 0,
    pageSize: 4,
    currentPage: 1,
    sideBarFriends: [],
    sideBarFriendsQuantity: 6,
    isFetching: false


}

export const setFriends = (friends, totalFriendsCount) => ({type: SET_FRIENDS, friends, totalFriendsCount})
export const setSideBarFriends = (sideBarFriends) => ({type: SET_SIDEBAR_FRIENDS, sideBarFriends})
export const setPage = (newPage) => ({type: SET_PAGE, newPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const changePage = (newPage) => (dispatch) => {


    dispatch(setPage(newPage))
    dispatch(getFriends())


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







        default : {
            return state
        }
    }
}
export default friendsReducer;