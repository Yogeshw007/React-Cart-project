import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrWK5Q6BzZPtWCjLK1qDL3ASi-R-UBf9A",
    authDomain: "cart-32aa8.firebaseapp.com",
    projectId: "cart-32aa8",
    storageBucket: "cart-32aa8.appspot.com",
    messagingSenderId: "78019536438",
    appId: "1:78019536438:web:a379f980a570b4f34b1a97"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
