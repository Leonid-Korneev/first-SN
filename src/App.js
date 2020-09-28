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


const App = (props) => {
    debugger;

    return (
        <BrowserRouter>
          <div className="app">
              <div className="app-wrapper">
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap"/>
                  <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
                  <Header/>

                  <NavBar state={props.appState.friends}/>
                  <div className="app-wrapper__content">

                      <Route path="/profile" render= {()=> <Profile state={props.appState.profile} addPost={props.addPost} updateNewText={props.updateNewText} /> } />
                      <Route path="/dialogs" render= {()=> <Dialogs state={props.appState.dialogs} addMessage={props.addMessage}  updateNewMessage={props.updateNewMessage} />} />
                      <Route path="/news" render= {()=> <News/>} />
                      <Route path="/settings" render= {()=> <Settings/>} />
                      <Route path="/music" render= {()=> <Music/>}/>
                  </div>
          </div>



            </div>
        </BrowserRouter>

    );
}


export default App;
