// Import the functions you need from the SDKs you need
import  firebase  from 'firebase/compat';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY4gd6ugSr8N3X5_FQybGthoDkUj7msCU",
  authDomain: "fir-auth-82b32.firebaseapp.com",
  projectId: "fir-auth-82b32",
  storageBucket: "fir-auth-82b32.appspot.com",
  messagingSenderId: "678410457490",
  appId: "1:678410457490:web:3958225d6ebd26d2c1714b",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };