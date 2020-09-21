import React from 'react';

import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import NavBar from './components/NavBar';



const App = () => {
  return (
   
    <div className="app-wrapper">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
     < Header/>
      <NavBar/>
      <Profile />







    </div>
  );
}





export default App;
