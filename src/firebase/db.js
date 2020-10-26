import {initializeApp} from 'firebase';
import 'firebase/firestore';

var app = initializeApp({
  apiKey: "AIzaSyB1tICk9QZjNR_4S-R35szs2On-hItVhxc",
  authDomain: "vuegogo.firebaseapp.com",
  databaseURL: "https://vuegogo.firebaseio.com",
  projectId: "vuegogo",
  storageBucket: "vuegogo.appspot.com",
  messagingSenderId: "908718021564",
  appId: "1:908718021564:web:762b181b5595a01f4b69b9",
  measurementId: "G-X21JZ650EV"
});

// Initialize Firebase
export const db = app.firestore();
