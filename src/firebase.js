// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: dotenv.API_KEY,
  authDomain: dotenv.AUTH_DOMAIN,
  projectId: dotenv.PROJECT_ID,
  storageBucket: dotenv.STORAGE_BUCKET,
  messagingSenderId: dotenv.MESSAGING_SENDER_ID,
  appId: dotenv.APP_ID,
  measurementId: dotenv.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);