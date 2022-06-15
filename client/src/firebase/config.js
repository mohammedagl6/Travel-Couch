// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCj45DyWNaeIjY6bzbPxWja0SGnawmryqM',
  authDomain: 'travel-couch.firebaseapp.com',
  projectId: 'travel-couch',
  storageBucket: 'travel-couch.appspot.com',
  messagingSenderId: '343234348894',
  appId: '1:343234348894:web:d3d9afd1d1a520a47bf1cf',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
