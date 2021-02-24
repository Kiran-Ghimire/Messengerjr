import firebase from "firebase";




const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2KA37Lu9gXHzDobSs92gQS2c0ygQsgyQ",
    authDomain: "messengerjr-4339b.firebaseapp.com",
    projectId: "messengerjr-4339b",
    storageBucket: "messengerjr-4339b.appspot.com",
    messagingSenderId: "926956866915",
    appId: "1:926956866915:web:5d4c3e65d541f520701756",
    measurementId: "G-DXSZ90THV9"
});
   
  
const db= firebaseApp.firestore();

export default  db;