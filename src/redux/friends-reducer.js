import {friendsApi} from "../api/api";


const SET_FRIENDS = "SET_FRIENDS"
const SET_PAGE = "SET_PAGE"

let initialState ={

    friends: [],
    totalFriendsCount: 0,
    pageSize: 4,
    currentPage: 1



}

export const setFriends = (friends,totalFriendsCount)=> ({type: SET_FRIENDS, friends, totalFriendsCount })
export const setPage = (newPage) =>  {
    debugger
    return ({type:SET_PAGE , newPage }) }

//AC
export const changePage = (newPage) => (dispatch)=> {


        dispatch(setPage(newPage))
    dispatch(getFriends())


}

//thunks AC

export const  getFriends = ()=> async (dispatch,getState)=> {


    //fetching
    //request
    let quantity = getState().friends.pageSize
    let currentPage = getState().friends.currentPage
    let response = await friendsApi.getFriends(quantity,currentPage)
    dispatch(setFriends(response.items,response.totalCount))
    //fetching false

}






const friendsReducer =  (state= initialState , action ) => {


    switch (action.type) {

        case SET_FRIENDS: {
            return {...state, friends: [...action.friends], totalFriendsCount:action.totalFriendsCount}

        }
        case SET_PAGE: {
            return {...state,  currentPage:action.newPage}

        }


        default : {
            return state
        }
    }
}
export default friendsReducer;