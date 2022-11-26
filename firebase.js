import * as firebase from 'firebase-admin'

const firebaseConfig = {
  apiKey: "AIzaSyCN6pi-lxj4p1m6iJP6m87ywQDtJqru0nU",
  authDomain: "amzn-nextjs-3dba2.firebaseapp.com",
  projectId: "amzn-nextjs-3dba2",
  storageBucket: "amzn-nextjs-3dba2.appspot.com",
  messagingSenderId: "629614690872",
  appId: "1:629614690872:web:ca5ef7b9b48cc35fe15ccd"
};


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()

export default db