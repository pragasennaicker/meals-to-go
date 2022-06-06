import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const loginRequest = async (auth, email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const createUserRequest = async (auth, email, password) => {
  const newUser = await createUserWithEmailAndPassword(auth, email, password);
  return newUser.user;
};

export const signOutRequest = async (auth) => {
  await signOut(auth);
};
