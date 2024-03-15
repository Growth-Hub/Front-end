import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import InputField from "../shared/InputField";
import { SignupFormState } from "../../constant/auth";
import { AuthForm } from "../../models/auth";
import { handleEmailSignup } from "../../apis/auth";
import checkedFormData from "../../utils/checkedFormData";

const LoiginForm = ({
  isLogin,
  toggleAuth,
}: {
  isLogin: boolean;
  toggleAuth: (e: FormEvent<HTMLButtonElement>) => void;
}) => {
  const [form, setForm] = useState<AuthForm>({
    email: "",
    password: "",
    username: "",
  });
  const [isActive, setIsActive] = useState<boolean>(false);
  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlClickButton = async (e: FormEvent<HTMLButtonElement>) => {
    setIsActive(true);
    e.preventDefault();
    const isEmpty = checkedFormData(form);
    if (isEmpty) console.log("not enough");
    else await handleEmailSignup(form);
    setIsActive(false);
  };
  return (
    <Container $isLogin={isLogin}>
      {SignupFormState.map(({ id, name, ...props }, index) => (
        <InputField
          {...props}
          key={index}
          onBlur={onBlur}
          id={id}
          name={name}
          value={form[name as keyof AuthForm]}
        />
      ))}
      <button disabled={isActive} onClick={handlClickButton}>
        회원가입
      </button>
      <button onClick={toggleAuth}>뒤로가기</button>
    </Container>
  );
};

const Container = styled.form<{ $isLogin: boolean }>(
  {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "100%",
    transition: "transform 0.3s ease-in-out",
  },
  ({ $isLogin }) => ({ transform: $isLogin ? "translateX(100%)" : "none" })
);

export default LoiginForm;
