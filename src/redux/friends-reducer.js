import {friendsApi} from "../api/api";


const SET_FRIENDS = "SET_FRIENDS"

let initialState ={



}
// AC
export const setFriends = (friends)=> ({type: SET_FRIENDS, friends })





//thunks AC

export const  getFriends = (quantity)=> async (dispatch)=> {


    //fetching
    //request
    let response = await friendsApi.getFriends(quantity)
    dispatch(setFriends(response.items))
    //fetching false

}






const friendsReducer =  (state= initialState , action ) => {


    switch (action.type) {

        case SET_FRIENDS: {
            return {...state, friends: [...action.friends]}

        }
        default : {
            return state
        }
    }
}
export default friendsReducer;