import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profile : profileReducer,
    dialogs : dialogsReducer,
    friends: friendsReducer,
    usersSearch: usersReducer,
    auth: authReducer,
    form: formReducer





});
let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;


export default store;