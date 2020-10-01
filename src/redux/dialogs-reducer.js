const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";



 const dialogsReducer = (state, action) => {
     switch (action.type) {
         case ADD_MESSAGE : {
             let newMessage = {author: "you:", text: state.newMessageText};
             let currentURL = window.location.href;
             let index = currentURL[currentURL.length - 1];
             state.dialogsData[index - 1].messageData.push(newMessage);

             state.newMessageText = "";
             break;

         }

         case UPDATE_NEW_MESSAGE_TEXT : {
             state.newMessageText = action.newText;
             break;
         }
         default : {
             return state
         }

     }
     return state;




}

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default dialogsReducer
