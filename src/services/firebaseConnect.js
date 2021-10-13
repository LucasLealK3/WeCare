import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyD-Jz5dQWfIb8fXuEWi0zL7E95eDfeHjbY",
  authDomain: "wecare-533c0.firebaseapp.com",
  databaseURL: "https://wecare-533c0-default-rtdb.firebaseio.com",
  projectId: "wecare-533c0",
  storageBucket: "wecare-533c0.appspot.com",
  messagingSenderId: "662931209919",
  appId: "1:662931209919:web:443c7f38ffaa249380500a",
  measurementId: "G-SH6MQ6K1TY"
 };
 if (!firebase.apps.length){
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 }
export default firebase;