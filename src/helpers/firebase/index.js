import firebase from '@firebase/app';
import '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyA5IfXgpufwFt65WOzOhaNOHGxl1qxZdRc",
    authDomain: "task-board-33819.firebaseapp.com",
    databaseURL: "https://task-board-33819.firebaseio.com",
    projectId: "task-board-33819",
    storageBucket: "",
    messagingSenderId: "309882270911",
    appId: "1:309882270911:web:dd4c94c6ce40a356"
};

firebase.initializeApp(firebaseConfig);

export default firebase;