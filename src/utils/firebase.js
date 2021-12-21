// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBJj7-nR91evusqdjikwJvDIVcmY_pEQIg',
  authDomain: 'loop-machine-699b5.firebaseapp.com',
  projectId: 'loop-machine-699b5',
  storageBucket: 'loop-machine-699b5.appspot.com',
  messagingSenderId: '791963714106',
  appId: '1:791963714106:web:fb00827b7fd95cc1832b03',
  measurementId: 'G-NSRL09BZCZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
