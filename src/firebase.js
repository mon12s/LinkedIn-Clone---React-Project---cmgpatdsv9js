import  firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCNU1U5WfBbjtK411bdEF4nvjEaW5QL7ak",
  authDomain: "linkedin-clone-8ae3a.firebaseapp.com",
  projectId: "linkedin-clone-8ae3a",
  storageBucket: "linkedin-clone-8ae3a.appspot.com",
  messagingSenderId: "446337936627",
  appId: "1:446337936627:web:53648b69ca181edf855b86"
};
// this line of code connects everything
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //gets firestore database
  const db = firebaseApp.firestore();

  //for firebase authentication
 const auth = firebase.auth();

  export { db, auth, firebaseApp }