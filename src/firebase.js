// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC45_oD_s_VWBldwwds4FvvtNIcxW6PyII",
  authDomain: "netflix-clone-b4fbf.firebaseapp.com",
  projectId: "netflix-clone-b4fbf",
  storageBucket: "netflix-clone-b4fbf.appspot.com", // fixed typo: ".firebasestorage.app" → ".appspot.com"
  messagingSenderId: "947469624829",
  appId: "1:947469624829:web:dc4b477af1b7184cc86594",
  measurementId: "G-CHNZW4X2RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), { // changed "user" → "users" is conventional
      uid: user.uid,
      name,
      authProvider: "local", // fixed camelCase & comma
      email
    });
  } catch (error) {
    console.error(error);
    alert(error.message); // show readable message
  }
}

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}

// Logout
const logout = () => {
  signOut(auth);
}

export { auth, db, login, signup, logout };
