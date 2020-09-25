import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogsData = [
    {id: 1, name: "Leo"},
    {id: 2, name: "Dima"},
    {id: 3, name: "Nastya"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Papich"}];
const messageData = [
    {id: 1, text: "Hi"},
    {id: 2, text: "Hello there"},
    {id: 3, text: "How is it going"},
    {id: 4, text: "What's up?"},
    {id: 5, text: "Bye"}
];
const postsData = [
    {id: 1, text: "hi, how are you?", likes: 30},
    {id: 2, text: "This is my first post", likes: 43}
];






ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageData={messageData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
