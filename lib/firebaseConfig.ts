// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth for Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTsoCEsTYTDws1R01BDK_CXufHCAfMYZw",
  authDomain: "skills-sphere-b3818.firebaseapp.com",
  projectId: "skills-sphere-b3818",
  storageBucket: "skills-sphere-b3818.firebasestorage.app",
  messagingSenderId: "532686379086",
  appId: "1:532686379086:web:c75f123d2b17909abfcb1f",
  measurementId: "G-8FGYXNP310",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and export Firebase Auth
export const auth = getAuth(app);