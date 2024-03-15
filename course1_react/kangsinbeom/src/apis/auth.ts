import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../apis/firebase";
import { AuthForm } from "../models/auth";

export const handleEmailSignup = async (formData: AuthForm) => {
  const { email, password } = formData;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => console.log(userCredential))
    .catch((e) => console.error(e));
};

export const handleSocialLogiin = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider)
    .then((result) => console.log(result))
    .catch((e) => console.error(e));
};

export const handleEmailLogin = async (
  formData: Omit<AuthForm, "username">
) => {
  const { email, password } = formData;
  await signInWithEmailAndPassword(auth, email, password)
    .then((result) => console.log(result))
    .catch((e) => console.error(e));
};
