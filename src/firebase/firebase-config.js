import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDhwStdkiZXq74tG_XHc2VG3NY863-KHSc",
  authDomain: "journalapp-46fce.firebaseapp.com",
  projectId: "journalapp-46fce",
  storageBucket: "journalapp-46fce.appspot.com",
  messagingSenderId: "39726913546",
  appId: "1:39726913546:web:5291f06d8b33da3771e7f3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}
