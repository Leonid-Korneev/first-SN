import {authRequest} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,

};


const authReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_USER_DATA: {
            return {...state, ...action.data }
        }
        default : {
            return state
        }
    }


}


export const logIn = (formData)=> (dispatch)=>{

    authRequest.authLogIn(formData).then((response)=>{

        if(response.data.resultCode===0) {

            dispatch(authCheck())
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

export const setUserData = (id,login,email, isAuth) => ({type: SET_USER_DATA, data: {id,login,email, isAuth}})
export const authCheck = () => (dispatch) => {
    authRequest.authCheck().then((data)=> {
        debugger
                     if( data.resultCode===0){
                let {id, login, email} = data.data
                dispatch(setUserData(id,login,email, true ))
            }
        }
    )
}
export default authReducer;