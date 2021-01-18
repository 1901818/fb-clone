// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwPoT7qXFk_-ETffGNPXeKi_sCOL5nkvA",
    authDomain: "facebook-clone-f382b.firebaseapp.com",
    projectId: "facebook-clone-f382b",
    storageBucket: "facebook-clone-f382b.appspot.com",
    messagingSenderId: "843014304383",
    appId: "1:843014304383:web:e8bc2f6933606c40cf454a",
    measurementId: "G-2ZB00FEBD5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();  // Start a sign in process for an unauthenticated user.

export { auth, provider };
export default db;