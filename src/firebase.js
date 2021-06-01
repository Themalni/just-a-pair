import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAjJDeOJ4DWRUnSodivxHWFa3X84pysd8Q",
  authDomain: "just-a-pair.firebaseapp.com",
  databaseURL: "https://just-a-pair.firebaseio.com",
  projectId: "just-a-pair",
  storageBucket: "just-a-pair.appspot.com",
  messagingSenderId: "143413952516",
  appId: "1:143413952516:web:d64556131970fc22"
};

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
fb.firestore().settings({ timestampsInSnapshots: true })

export { fb, db }