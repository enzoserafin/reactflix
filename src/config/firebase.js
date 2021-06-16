import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
    apiKey: "AIzaSyAEPY5XlsJ0PzngEbR_riAmrXoXg7QlBlA",
    authDomain: "reactflix-db62f.firebaseapp.com",
    databaseURL: "https://reactflix-db62f-default-rtdb.firebaseio.com",
    projectId: "reactflix-db62f",
    storageBucket: "reactflix-db62f.appspot.com",
    messagingSenderId: "86440667586",
    appId: "1:86440667586:web:05943e7d35bcb2e0028e5b"
});

const db = firebase.database()

export { db }