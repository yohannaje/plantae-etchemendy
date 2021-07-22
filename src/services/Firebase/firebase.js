import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCCpHW75-echfkrPGDs5NuH4gGGG3wS9wU",
  authDomain: "plantae-etchemendy.firebaseapp.com",
  projectId: "plantae-etchemendy",
  storageBucket: "plantae-etchemendy.appspot.com",
  messagingSenderId: "649535559004",
  appId: "1:649535559004:web:1cb0ab86f2d532e5b69d99",
};

const fb = firebase.initializeApp(firebaseConfig);
export const dataBase = fb.firestore();
