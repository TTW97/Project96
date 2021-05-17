import * as firebase from 'firebase'
require('@firebase/firestore')


  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyqdluiRxbDp_JN-6mygaOroJP__ntngo",
    authDomain: "gardeningapp-bcd44.firebaseapp.com",
    projectId: "gardeningapp-bcd44",
    storageBucket: "gardeningapp-bcd44.appspot.com",
    messagingSenderId: "688986757285",
    appId: "1:688986757285:web:cfcd139760f7e0f2e8154c"
  };
  // Initialize Firebase
  if (!firebase.apps.length){

  firebase.initializeApp(firebaseConfig);

  }


export default firebase.firestore()