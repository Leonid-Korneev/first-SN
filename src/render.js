import React from "react";

import ReactDOM from "react-dom";
import App from "./App";
import {addMessage, addPost, updateNewMessage} from "./redux/state";
import {updateNewText} from "./redux/state";


export let rerenderEntireTree = (appState) => {

    ReactDOM.render(
        <React.StrictMode>
            <App appState={appState}  addPost={addPost} updateNewText={updateNewText} addMessage={addMessage} updateNewMessage={updateNewMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
