import React from 'react';

import './App.css';
import Profile from './components/Profile/Profile';

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';



const App = () => {
  return (
   
    <div className="app-wrapper">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
      <Header/>
      <NavBar/>
      <Profile />







    </div>
  );
}





export default App;
