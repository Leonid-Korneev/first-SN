import React from 'react';

import './App.css';
import Profile from './components/Profile/Profile';

import NavBar from './components/NavBar/NavBar';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (

        <div className="app-wrapper">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap"/>
            <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
            <Header/>
            <NavBar/>
            <div className="app-wrapper__content">
                <Dialogs/>
            </div>

            {/*<Profile />*/}

        </div>
    );
}


export default App;
