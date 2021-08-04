import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC1GpYrmnnzMzojkoy4KdZM0ENhjFsydGU",
    authDomain: "anazone-clone.firebaseapp.com",
    projectId: "anazone-clone",
    storageBucket: "anazone-clone.appspot.com",
    messagingSenderId: "683490855243",
    appId: "1:683490855243:web:d956dc74ab14002d1a80ce",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
