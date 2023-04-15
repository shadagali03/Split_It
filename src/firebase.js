// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRZrxWHHgTrmAWNVnj9ptoV7TNpjefiAs",
    authDomain: "splitit-1bb59.firebaseapp.com",
    projectId: "splitit-1bb59",
    storageBucket: "splitit-1bb59.appspot.com",
    messagingSenderId: "140274253034",
    appId: "1:140274253034:web:8e7d8649f8deb1bde36b93",
    measurementId: "G-4LM5HMNMBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);