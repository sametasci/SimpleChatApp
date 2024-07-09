import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "chatapp-5c52d.firebaseapp.com",
  databaseURL: "https://chatapp-5c52d.firebaseio.com",
  projectId: "chatapp-5c52d",
  storageBucket: "chatapp-5c52d.appspot.com",
  messagingSenderId: "369349972385"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots:true});
export default firebaseApp.firestore();
