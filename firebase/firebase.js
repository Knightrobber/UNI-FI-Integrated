import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/firebase-database";


var config = {
    apiKey: "AIzaSyCw5d4c-akVvDcD6g4hfIoitlnNNGyaRZ0",
    authDomain: "uni-fi-a4a8e.firebaseapp.com",
    databaseURL: "https://uni-fi-a4a8e-default-rtdb.firebaseio.com",
    projectId: "uni-fi-a4a8e",
    storageBucket: "uni-fi-a4a8e.appspot.com",
    messagingSenderId: "383969856047",
    appId: "1:383969856047:web:42e42c30d0c7d25b9e14da",
    measurementId: "G-DP4WF4X4HM"
  };


if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export default firebase;