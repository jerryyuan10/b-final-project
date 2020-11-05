import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCCwFCJdbIvYs_lBDPFmIwAt1cgmSBxQkQ",
    authDomain: "code-sprint-b-final-yy.firebaseapp.com",
    databaseURL: "https://code-sprint-b-final-yy.firebaseio.com",
    projectId: "code-sprint-b-final-yy",
    storageBucket: "code-sprint-b-final-yy.appspot.com",
    messagingSenderId: "1035022302523",
    appId: "1:1035022302523:web:9beaabdc35b5fb50b98b1e"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const buildingsCollection = db.collection("buildings");

  export default db;
  export { buildingsCollection };