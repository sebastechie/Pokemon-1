import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD0GIBJRv6-5ZSi9N2frevzPhhYaBhN3Oo",
    authDomain: "pokemon-1-29098.firebaseapp.com",
    databaseURL: "https://pokemon-1-29098.firebaseio.com",
    projectId: "pokemon-1-29098",
    storageBucket: "pokemon-1-29098.appspot.com",
    messagingSenderId: "46260947335",
    appId: "1:46260947335:web:2e6a79038d75b646496b22"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  export default firebase;