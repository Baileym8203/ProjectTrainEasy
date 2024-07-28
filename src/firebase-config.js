// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Z2KSe864gFwWtTcIiZ-wQpbYCYOOeeg",
  authDomain: "trainez-e3cd0.firebaseapp.com",
  projectId: "trainez-e3cd0",
  storageBucket: "trainez-e3cd0.appspot.com",
  messagingSenderId: "248822864103",
  appId: "1:248822864103:web:10d62e57117d2107db2a42",
  measurementId: "G-YDTSNKZ0FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
