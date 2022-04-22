import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBjLbxktNIicdLyKrvXY-TcThdNNIn0Ysw",
  authDomain: "crwn-db-38fdb.firebaseapp.com",
  projectId: "crwn-db-38fdb",
  storageBucket: "crwn-db-38fdb.appspot.com",
  messagingSenderId: "443184042545",
  appId: "1:443184042545:web:79190db981df65c1347b10",
  measurementId: "G-QNHYYGTLCE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
