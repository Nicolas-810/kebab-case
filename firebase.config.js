// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwGWSPzGn-8a_8cgB1_Qdu2tfh4n5wllE",
  authDomain: "kebab-case.firebaseapp.com",
  projectId: "kebab-case",
  storageBucket: "kebab-case.appspot.com",
  messagingSenderId: "756334425278",
  appId: "1:756334425278:web:533e0ad1473c7d3d489ae"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);