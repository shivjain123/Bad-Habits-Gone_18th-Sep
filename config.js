import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCb1hT81zwPX8tgqN9d0oYjbUczNYVU6xo",
  authDomain: "bad-habits-gone-18th-sep.firebaseapp.com",
  projectId: "bad-habits-gone-18th-sep",
  storageBucket: "bad-habits-gone-18th-sep.appspot.com",
  messagingSenderId: "984218063853",
  appId: "1:984218063853:web:f37f1e02f51e4aa8b24de4"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
