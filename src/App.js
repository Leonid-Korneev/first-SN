import React from 'react';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Profile from "./components/Profile/Profile";
import { LoginForm} from "./components/Login/Login";




const App = () => {

    return (

        <BrowserRouter>
            <div className="app">
                <div className="app-wrapper">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap"/>
                    <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
                    <HeaderContainer/>



                    <NavBar/>
                    <div className="app-wrapper__content">
                        <Route path="/profile/:userId?" render={() => <Profile/>}/>
                        <Route path="/users" render={()=> <UsersContainer/>}/>
                        <Route path="/dialogs/:userId?" render={() => <DialogsContainer/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/login" render={() => <LoginForm/>}/>


                    </div>
                </div>


            </div>
        </BrowserRouter>

    );
}


export default App;
