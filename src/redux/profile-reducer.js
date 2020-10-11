const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET_PROFILE";

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
    profile: null
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

        default : {
            return state
        }
    }


}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;