import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsxJp_2w-WwWEgpnC2W3AKVGLiBv9GS9I",
    authDomain: "whatsapp-4e6c1.firebaseapp.com",
    databaseURL: "https://whatsapp-4e6c1.firebaseio.com",
    projectId: "whatsapp-4e6c1",
    storageBucket: "whatsapp-4e6c1.appspot.com",
    messagingSenderId: "126322664528",
    appId: "1:126322664528:web:30340e837cfc966a999d55",
    measurementId: "G-GRN2K9TPCX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;