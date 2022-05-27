// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKw8XNfGBMOwykf8Sgusz27hOpIF-_3Qg",
  authDomain: "friends-forever-24b2a.firebaseapp.com",
  projectId: "friends-forever-24b2a",
  storageBucket: "friends-forever-24b2a.appspot.com",
  messagingSenderId: "266473921377",
  appId: "1:266473921377:web:d72bcd43b676a4b95c4320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;