import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAej4qBZCBE6y9fn57Z3_aiFJ4nGw9cD6c",
    authDomain: "goalcoach-725f9.firebaseapp.com",
    databaseURL: "https://goalcoach-725f9.firebaseio.com",
    projectId: "goalcoach-725f9",
    storageBucket: "goalcoach-725f9.appspot.com",
    messagingSenderId: "175598616259",
    appId: "1:175598616259:web:ca8de92afce9f293f92c76",
    measurementId: "G-F5KG4S6MHG"
};

export const firebaseApp = firebase.initializeApp(config);
