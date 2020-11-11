import {authRequest, securityAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_ERROR_DATA = "SET_ERROR_DATA"
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL"
const SET_SUCCESSFUL_LOG = "SET_SUCCESSFUL_LOG"


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    successfulLog: null,
    errorMessages: [],
    captchaUrl: null

};


const authReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_USER_DATA: {
            return {...state, ...action.data}
        }
        case SET_SUCCESSFUL_LOG : {
            return {...state, successfulLog: true}
        }
        case SET_ERROR_DATA: {
            return {...state, successfulLog: false, errorMessages: [...action.errorMessages]}
        }

        case SET_CAPTCHA_URL: {
            return {...state, captchaUrl: action.captchaUrl}
        }


        default : {
            return state
        }
    }


}

export const setErrorData = (errorMessages) => ({type: SET_ERROR_DATA, errorMessages})
export const setUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, data: {id, login, email, isAuth}})
export const setSuccesfullLog = () => ({type: SET_SUCCESSFUL_LOG})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl})
export const getCaptcha = () => async (dispatch) => {

    let response = await securityAPI.securityGetCapcha()
    dispatch(setCaptchaUrl(response.data.url))


}


export const logIn = (formData) => async (dispatch) => {

    let response = await authRequest.authLogIn(formData)


    if (response.data.resultCode === 0) {
        dispatch(authCheck())
        dispatch(setCaptchaUrl(null))
        dispatch(setSuccesfullLog)
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        } else

            dispatch(setErrorData(response.data.messages))
    }
}
export const logOut = () => async (dispatch) => {
    let response = await authRequest.authLogOut()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
        dispatch(authCheck())
    }

}
export const authCheck = () => async (dispatch) => {
    let data = await authRequest.authCheck()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setUserData(id, login, email, true))
    }
}
export default authReducer;