import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useFirebaseLogin } from '../../hooks/useFirebaseLogin'; 
import { Button, ErrorMessage, ID, Input, LoginContainer, LoginForm, PW, Account, SocialLoginBtn } from '../../styles/Login';
import { ReactComponent as Github } from '../../assets/github-mark.svg';
import { ReactComponent as Google } from '../../assets/google-logo.svg';

interface InputType {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, formState: { errors }, handleSubmit } = useForm<InputType>({mode: 'all'});
  const navigate = useNavigate();
  const { emailLogin, googleLogin, githubLogin, error } = useFirebaseLogin();

  const onSubmit: SubmitHandler<InputType> = ({ email, password }) => {
    emailLogin(email, password).then(() => navigate("/cat"));
  };

  return (
    <LoginContainer>
      <h2>Welcome 😺</h2>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <ID>Email</ID>
          <Input
            type="text"
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "유효하지 않은 이메일 형식입니다."
              }
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <PW>Password</PW>
          <Input
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 6,
                message: "비밀번호는 최소 6자 이상이어야 합니다."
              }
            })}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
        <Button type="submit">Login</Button>
        <SocialLoginBtn onClick={googleLogin}><Google style={{marginRight: '10px'}}/>Sign in with Google</SocialLoginBtn>
        <SocialLoginBtn onClick={githubLogin}><Github style={{marginRight: '10px'}}/>Sign in with Github</SocialLoginBtn>
        <Account><Link to="/signup" style={{color:"white"}}>create account</Link></Account>
      </LoginForm>
    </LoginContainer>
  );
}
