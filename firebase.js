import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional 
    apiKey: "AIzaSyDC4g3uRmBZPN-JOn9V66BOiwiUKUVKXas",
    authDomain: "tesla-vijay.firebaseapp.com",
    projectId: "tesla-vijay",
    storageBucket: "tesla-vijay.appspot.com",
    messagingSenderId: "157490360057",
    appId: "1:157490360057:web:10428fedc03708ba00bc28",
    measurementId: "G-VXT8F2N3D5"
})

const db = firebaseApp.firestore();

export {db};