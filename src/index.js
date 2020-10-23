import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase'

const config = {
    apiKey: "AIzaSyCBs_Ei6fVuO1wk3fM5xkapfvw6tPF9Rrw",
    authDomain: "mynetflix-93ded.firebaseapp.com",
    databaseURL: "https://mynetflix-93ded.firebaseio.com",
    projectId: "mynetflix-93ded",
    storageBucket: "mynetflix-93ded.appspot.com",
    messagingSenderId: "1069482869324",
    appId: "1:1069482869324:web:e528eb3f83a81d71e7aae9"
  };




  ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);