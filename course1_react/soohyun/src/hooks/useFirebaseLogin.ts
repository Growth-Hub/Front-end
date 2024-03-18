import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut } from 'firebase/auth';
import app from '../firebase';
import { useNavigate } from 'react-router-dom';

export const useFirebaseLogin = () => {
  const [error, setError] = useState('');
  const auth = getAuth(app);
  const navigate = useNavigate();

  const emailLogin = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/cat");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/cat");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const githubLogin = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/cat");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return { emailLogin, googleLogin, githubLogin, logout, error };
};
