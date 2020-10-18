import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk';



let reducers = combineReducers({
    profile : profileReducer,
    dialogs : dialogsReducer,
    friends: friendsReducer,
    usersSearch: usersReducer,
    auth: authReducer,






});
let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;


export default store;