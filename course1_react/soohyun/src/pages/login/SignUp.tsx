import React, { useState } from 'react';
import { Button, ErrorMessage, ID, Input, LoginContainer, LoginForm, PW, Account } from '../../styles/Login';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const auth = getAuth(app);
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: username,});
      navigate("/signin");
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //새로고침 방지
    onSubmit(); 
  };

  return (
    <LoginContainer>
      <h2>회원가입</h2>
      <LoginForm onSubmit={handleSubmit}>
        <div>
          <ID>Name</ID>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <PW>Email</PW>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PW>Password</PW>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <PW>Password Check</PW>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Create Account</Button>
        <Account><Link to="/signin" style={{color:"white"}}>Login</Link></Account>
      </LoginForm>
    </LoginContainer>
  );
}
