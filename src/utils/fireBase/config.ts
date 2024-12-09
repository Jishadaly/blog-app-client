// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyA4kUmaoKmQAAe_LKJwpt7pe-x6wI7S2ww",
//   authDomain: "mentorme-cfcdc.firebaseapp.com",
//   projectId: "mentorme-cfcdc",
//   storageBucket: "mentorme-cfcdc.appspot.com",
//   messagingSenderId: "930419930747",
//   appId: "1:930419930747:web:712827fd069d13d89114de",
//   measurementId: "G-LHEL4R3RWB"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };