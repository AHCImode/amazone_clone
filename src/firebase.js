import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAQkPwr6Qu_I9XuzJ8fMPREkXDtiNE8n2E",
    authDomain: "laralok-c0b93.firebaseapp.com",
    projectId: "laralok-c0b93",
    storageBucket: "laralok-c0b93.appspot.com",
    messagingSenderId: "219570475384",
    appId: "1:219570475384:web:7e78177f3181932500f88d",
    measurementId: "G-7M39LHBLZ2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};