import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDMBPxO6-feiLb8ku5AKa8GUwGoFcQJd4w",
  authDomain: "battery-e794c.firebaseapp.com",
  databaseURL: "https://battery-e794c.firebaseio.com",
  projectId: "battery-e794c",
  storageBucket: "battery-e794c.appspot.com",
  messagingSenderId: "290107964487",
  appId: "1:290107964487:web:2f133f44c65985ea180562",
  measurementId: "G-XXTWM46B4D"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore();
}


  
  export default firebase;