import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyD44_inON3UKi9LpB7uP6CVSyLpe0Tm95Q",
  authDomain: "projetiu.firebaseapp.com",
  databaseURL: "https://projetiu-default-rtdb.firebaseio.com",
  projectId: "projetiu",
  storageBucket: "projetiu.appspot.com",
  messagingSenderId: "166893532589",
  appId: "1:166893532589:web:0732f9524fbe4c7053dd24",
  measurementId: "G-08JERXWFJ8"
 };
 if (!firebase.apps.length){
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 }
export default firebase;