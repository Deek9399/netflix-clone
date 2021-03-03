// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBBvrB9EJ0Eb6xqIjc0nMzUUN0-YJZyqoM",
  authDomain: "netflix-clone-deeksha.firebaseapp.com",
  projectId: "netflix-clone-deeksha",
  storageBucket: "netflix-clone-deeksha.appspot.com",
  messagingSenderId: "1049245313655",
  appId: "1:1049245313655:web:4c2945c6f63169ddffb472",
  measurementId: "G-BW7DEDPZML",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
