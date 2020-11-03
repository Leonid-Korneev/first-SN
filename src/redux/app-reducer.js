import {authCheck} from "./auth-reducer";
import {getFriends} from "./friends-reducer";


const SET_INITIALIZING_SUCCESS = "SET_INITIALIZING_SUCCESS"


let initialState = {
    initialized: false

};


const appReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_INITIALIZING_SUCCESS: {
            return {...state, initialized: true}
        }

        default : {
            return state
        }
    }


}

export const initializingSuccess = () => ({type: SET_INITIALIZING_SUCCESS})

export const initialization = () => (dispatch) => {

    dispatch(authCheck()).then(() => {
        dispatch(getFriends(6))
        dispatch(initializingSuccess())
    })


}

export default appReducer;