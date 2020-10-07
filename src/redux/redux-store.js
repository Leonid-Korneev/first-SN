import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profile : profileReducer,
    dialogs : dialogsReducer,
    friends: friendsReducer,
    usersSearch: usersReducer





});
let store = createStore(reducers);

window.store = store;


export default store;