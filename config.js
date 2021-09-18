import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyACsR0B6oH4N-pamhA_D6r7HC7Xcpw-20Y",
    authDomain: "bad-habits-gone-6fa96.firebaseapp.com",
    projectId: "bad-habits-gone-6fa96",
    storageBucket: "bad-habits-gone-6fa96.appspot.com",
    messagingSenderId: "33600081483",
    appId: "1:33600081483:web:8629d44b3d05c64a6147ce"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();