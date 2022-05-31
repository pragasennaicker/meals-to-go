import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpk9Bih93AuaS1IP-rlIx_ct-olU2Gwdc",
  authDomain: "mealstogo-f0e0b.firebaseapp.com",
  projectId: "mealstogo-f0e0b",
  storageBucket: "mealstogo-f0e0b.appspot.com",
  messagingSenderId: "561206388276",
  appId: "1:561206388276:web:2398a7d93b957196b28c61",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};
