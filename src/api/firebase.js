import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtQu-n_Qm7w-gVOnKV5ulAHPYmHXnSBVk",
  authDomain: "study-react-84362.firebaseapp.com",
  projectId: "study-react-84362",
  storageBucket: "study-react-84362.firebasestorage.app",
  messagingSenderId: "164089901516",
  appId: "1:164089901516:web:391b3557eb6b7528fbad69",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
