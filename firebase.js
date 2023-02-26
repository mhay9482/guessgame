import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAjmgQXtPhGo4R3QQsVtKHL2I_A3tALgh4",
  authDomain: "guess-33aeb.firebaseapp.com",
  projectId: "guess-33aeb",
  storageBucket: "guess-33aeb.appspot.com",
  messagingSenderId: "479303758684",
  appId: "1:479303758684:web:5d1993087d25d790ac0799",
  measurementId: "G-TR5BD1GS2J"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export the database reference for use in other files
export const database = getDatabase(firebaseApp);
