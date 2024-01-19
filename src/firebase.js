// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: import.meta.env.VITE_REACT_APP_FRE_API_KEY,
  authDomain: "chyralib-10c81.firebaseapp.com",
  projectId: "chyralib-10c81",
  storageBucket: "chyralib-10c81.appspot.com",
  messagingSenderId: "139221011929",
  appId: "1:139221011929:web:2ac28ae5a47986e6915dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);