import { InputFieldProps } from "../components/shared/InputField";

export const loginFormState = [
  {
    errorMessage: "이메일을 다시 확인해주세요",
    validation: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    id: "login-email",
    name: "email",
    title: "이메일",
    type: "email",
    placeholder: "example123@example.com",
    autoComplete: "email",
  },
  {
    errorMessage: "비밀번호를 다시 확인해주세요",
    validation:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    id: "login-password",
    title: "비밀번호",
    name: "password",
    type: "password",
    placeholder: "대문자, 소문자, 숫자, 특수문자를 포함 8자 이상",
    autoComplete: "current-password",
  },
] as InputFieldProps[];

export const SignupFormState = [
  {
    errorMessage: "올바른 형식이 아닙니다",
    validation: /^[a-zA-Z][a-zA-Z0-9]{5,11}$/,
    id: "username",
    name: "username",
    title: "아이디",
    type: "text",
    placeholder: "영문과 숫자를 포함한 6자 이상",
    autoComplete: "username",
  },
  {
    errorMessage: "이메일을 다시 확인해주세요",
    validation: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    id: "signup-email",
    name: "email",
    title: "이메일",
    type: "email",
    placeholder: "example123@example.com",
    autoComplete: "email",
  },
  {
    errorMessage: "비밀번호를 다시 확인해주세요",
    validation:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    id: "signup-password",
    name: "password",
    title: "비밀번호",
    type: "password",
    placeholder: "대문자, 소문자, 숫자, 특수문자를 포함 8자 이상",
    autoComplete: "new-password",
  },
] as InputFieldProps[];
