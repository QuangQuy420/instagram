// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs5y83WvqxNuEUHa9G_PUTKk22uOgNS0c",
  authDomain: "instagram-9b7ab.firebaseapp.com",
  projectId: "instagram-9b7ab",
  storageBucket: "instagram-9b7ab.appspot.com",
  messagingSenderId: "662227753933",
  appId: "1:662227753933:web:e253160c62c7538a658284"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const uploadImage = getStorage(app);