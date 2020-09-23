import React from 'react';

import './App.css';
import Profile from './components/Profile/Profile';

import NavBar from './components/NavBar/NavBar';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap"/>
                <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
                <Header/>
                <NavBar/>
                <div className="app-wrapper__content">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs"component={Dialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/settings"component={Settings}/>
                    <Route path="/music"component={Music}/>
                </div>



            </div>
        </BrowserRouter>

    );
}


export default App;
