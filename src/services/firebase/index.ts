// export const firebaseConfig = {
//   apiKey: process.env.REACT_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: '771055105465',
//   appId: process.env.REACT_FIREBASE_APP_ID,

// };
import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyAPV2HBJZAJmps-GPGD_3y5qNYQirsKX_A',
  authDomain: 'telegram-app-clone-81bfe.firebaseapp.com',
  projectId: 'telegram-app-clone-81bfe',
  storageBucket: 'telegram-app-clone-81bfe.appspot.com',
  messagingSenderId: '771055105465',
  appId: '1:771055105465:web:5ef68684eabc99c6bdb268',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default db;
