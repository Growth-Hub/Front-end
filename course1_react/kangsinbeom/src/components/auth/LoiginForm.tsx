import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import InputField from "../shared/InputField";
import { loginFormState } from "../../constant/auth";
import { Flex } from "../shared";
import { AuthForm } from "../../models/auth";
import checkedFormData from "../../utils/checkedFormData";
import { handleEmailLogin, handleSocialLogiin } from "../../apis/auth";
import { useModalContext } from "../../contexts/ModalContext";

const LoiginForm = ({
  isLogin,
  toggleAuth,
}: {
  isLogin: boolean;
  toggleAuth: (e: FormEvent<HTMLButtonElement>) => void;
}) => {
  const { setIsOpen } = useModalContext();
  const [form, setForm] = useState<Omit<AuthForm, "username">>({
    email: "",
    password: "",
  });
  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlClickButton = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isEmpty = checkedFormData(form);
    if (isEmpty) console.log("asdfasdf");
    else await handleEmailLogin(form).then(() => setIsOpen(false));
  };

  const onClickSocialLogin = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await handleSocialLogiin().then(() => setIsOpen(false));
  };

  return (
    <Container $isLogin={isLogin}>
      {loginFormState.map(({ id, name, ...props }, index) => (
        <InputField
          {...props}
          key={index}
          onBlur={onBlur}
          id={id}
          name={name}
          value={form[name as keyof Omit<AuthForm, "username">]}
        />
      ))}
      <Flex $direction="column" style={{ gap: 20 }}>
        <button onClick={handlClickButton}>로그인</button>
        <button onClick={onClickSocialLogin}>구글 로그인</button>
        <button onClick={toggleAuth}>회원가입하러가기</button>
      </Flex>
    </Container>
  );
};

const Container = styled.form<{ $isLogin: boolean }>(
  {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    transition: "transform 0.3s ease-in-out",
  },
  ({ $isLogin }) => ({ transform: $isLogin ? "none" : "translateX(-100%)" })
);

export default LoiginForm;
