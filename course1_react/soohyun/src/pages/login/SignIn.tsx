import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase'; // Firebase 설정이 포함된 파일의 경로에 맞게 조정
import { Button, ErrorMessage, ID, Input, LoginContainer, LoginForm, PW, Account } from '../../styles/Login';
import { Link, useNavigate } from 'react-router-dom';

interface InputType {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, formState: { errors }, handleSubmit } = useForm<InputType>();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<InputType> = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/cat")
    } catch (error) {
      console.error('Login error:', error);
    }
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
        </div>

        <Button type="submit">Login</Button>
        <Account><Link to="/signup" style={{color:"white"}}>create account</Link></Account>
      </LoginForm>
    </LoginContainer>
  );
}
