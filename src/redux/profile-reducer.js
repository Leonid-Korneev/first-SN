import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_STATUS = "SET_STATUS";


let initialState = {
    postsData: [
        {id: 1, text: "hi, how are you?", likes: 30},
        {id: 2, text: "This is my first post", likes: 43}
    ],
    newPostText: "",
    profileInfo: {
        avatar: "",
        name: "Vitaly",
        birthDate: "26.03.1998",
        city: "Vinnica",
        education: "8 grade",
        website: "youtube.com/arthas"
    },
    profile: null,
    isFetching: false,
    status: ""
};


const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST : {
            let stateCopy = {...state}
            let newPost = {
                id: stateCopy.postsData.length + 1,
                text: stateCopy.newPostText,
                likes: 0
            };
            stateCopy.postsData = [...state.postsData, newPost]
            stateCopy.newPostText = "";
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}

        }
        case SET_PROFILE: {

            return {...state, profile: action.profile}
        }
        case TOGGLE_IS_FETCHING: {

            return {...state, isFetching: action.isFetching}
        }
        case SET_STATUS: {

            return {...state, status: action.status}
        }


        default : {
            return state
        }
    }


}
export const getProfile = (userId) => (dispatch) => {

    dispatch(toggleIsFetching(true))
    profileAPI.getProfile(userId)
        .then((response) => {
            dispatch(toggleIsFetching(false))
            dispatch(setProfile(response.data))
        })
}
export const getUserStatus = (userId) => (dispatch) => {


   profileAPI.getUserStatus(userId).then((response)=>{

       dispatch(setUserStatus(response.data))
   })
}
export const updateUserStatus = (status) => (dispatch)=> {

    profileAPI.updateUserStatus(status).then((response)=> {

        if(response.data.resultCode===0) {

            dispatch(setUserStatus(status))
        }
    })
}



export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserStatus = (status) => ({type: SET_STATUS, status})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export default profileReducer;