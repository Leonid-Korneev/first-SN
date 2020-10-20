import {authRequest} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_ERROR_DATA = "SET_ERROR_DATA"


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    successfulLog : null,
    errorMessages : []

};


const authReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_USER_DATA: {
            return {...state, ...action.data }
        }
        case SET_ERROR_DATA: {
            return {...state, successfulLog:false, errorMessages: [...action.errorMessages] }
        }
        default : {
            return state
        }
    }


}

export const setErrorData = (errorMessages)=> ({type: SET_ERROR_DATA, errorMessages})
export const setUserData = (id,login,email, isAuth) => ({type: SET_USER_DATA, data: {id,login,email, isAuth}})
export const logIn = (formData)=> (dispatch)=>{

    authRequest.authLogIn(formData).then((response)=>{

        if(response.data.resultCode===0) {

            dispatch(authCheck())
        } else {

            dispatch(setErrorData(response.data.messages))
        }
    })
}
export const logOut = ()=> (dispatch)=> {
    authRequest.authLogOut().then((response)=>{
        if(response.data.resultCode===0) {
            dispatch(setUserData(null,null,null, false ))

            dispatch(authCheck())
        }
    })
}
export const authCheck = () => (dispatch) => {
  return authRequest.authCheck().then((data)=> {

                     if( data.resultCode===0){
                let {id, login, email} = data.data
                dispatch(setUserData(id,login,email, true ))
            }
        }
    )

}
export default authReducer;