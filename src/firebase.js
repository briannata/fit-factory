import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
   } from "firebase/auth";
   import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
   } from "firebase/firestore";

   const firebaseConfig = {
    apiKey: "AIzaSyCF9TerHVai0UEjiYsvThAd4lueL7C1FZ0",
    authDomain: "fit-factory-a3669.firebaseapp.com",
    databaseURL: "https://fit-factory-a3669-default-rtdb.firebaseio.com",
    projectId: "fit-factory-a3669",
    storageBucket: "fit-factory-a3669.appspot.com",
    messagingSenderId: "618067257688",
    appId: "1:618067257688:web:ecd38e80e0966eba535d2d",
    measurementId: "G-PJM28K42JB"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};