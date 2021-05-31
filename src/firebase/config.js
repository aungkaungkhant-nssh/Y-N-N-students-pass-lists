import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyC_VEaJt8lfBCQ-I0FnIr4baw8vBVfVyhw",
    authDomain: "y-n-n-student-pass-list.firebaseapp.com",
    projectId: "y-n-n-student-pass-list",
    storageBucket: "y-n-n-student-pass-list.appspot.com",
    messagingSenderId: "556853000013",
    appId: "1:556853000013:web:f72bcf03a2bc4cb2d12904"
  };
  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth()
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export{db,timestamp,auth};