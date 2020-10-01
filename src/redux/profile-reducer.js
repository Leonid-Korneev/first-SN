const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
    }
};
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: state.postsData.length + 1,
                text: state.newPostText,
                likes: 0
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            break;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            break;
        }

        default : {
            return state
        }
    }


    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;