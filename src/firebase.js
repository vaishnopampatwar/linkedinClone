// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
// firebase init database
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDePoHSUMtpabUfkIKi9VIFvGvcSl9dArY",
    authDomain: "linkedin-clone-a745c.firebaseapp.com",
    projectId: "linkedin-clone-a745c",
    storageBucket: "linkedin-clone-a745c.appspot.com",
    messagingSenderId: "702543994116",
    appId: "1:702543994116:web:ccd972aaf86b68f4e78451",
    measurementId: "G-080CFWHV8T"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth= firebase.auth();

export {db, auth};