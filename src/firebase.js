import firebase from 'firebase'
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAm60ESIfqo5GDSBPjAtsEdlMzqXV2GyRk",
    authDomain: "instagram-clone-5afbe.firebaseapp.com",
    projectId: "instagram-clone-5afbe",
    storageBucket: "instagram-clone-5afbe.appspot.com",
    messagingSenderId: "305044073367",
    appId: "1:305044073367:web:4874f7b1e62bf4fb8472d2"
  });

  const db = firebaseApp.firestore();
//   const auth = firebase.auth();
//   const storage = firebase.storage();

  export {db}