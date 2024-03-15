import React from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, ErrorMessage, ID, Input, LoginContainer, LoginForm, PW, Account } from '../../styles/Login';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';

interface FormType {
  username: string;
  email: string;
  password: string;
  checkPassword: string;
}

// yup 스키마
const schema = yup.object({
  username: yup.string().required('이름을 입력해주세요.'),
  email: yup.string().required('이메일을 입력해주세요.').email('유효하지 않은 이메일 형식입니다.'),
  password: yup.string().required('비밀번호를 입력해주세요.').min(6, '비밀번호는 최소 6자 이상이어야 합니다.'),
  checkPassword: yup.string().oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
}).required();

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormType>({
    resolver: yupResolver(schema) as Resolver<FormType>,
    mode: 'all'
  });
  const [error, setError] = React.useState('');
  const auth = getAuth(app);
  const navigate = useNavigate();

  const onSubmit = async (data: FormType) => {
    const { username, email, password } = data;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: username });
      navigate("/signin");
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <LoginContainer>
      <h2>회원가입</h2>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <ID>Name</ID>
          <Input type="text" {...register('username')} />
          {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}

          <PW>Email</PW>
          <Input type="email" {...register('email')} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <PW>Password</PW>
          <Input type="password" {...register('password')} />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

          <PW>Password Check</PW>
          <Input type="password" {...register('checkPassword')} />
          {errors.checkPassword && <ErrorMessage>{errors.checkPassword.message}</ErrorMessage>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
        <Button type="submit">Create Account</Button>
        <Account><Link to="/signin" style={{ color: "white" }}>Login</Link></Account>
      </LoginForm>
    </LoginContainer>
  );
}
