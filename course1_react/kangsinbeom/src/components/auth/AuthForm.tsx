import { FormEvent, useState } from "react";
import { Flex } from "../shared";
import LoiginForm from "./LoiginForm";
import SignupForm from "./SignupForm";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const toggleAuth = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLogin((prev) => !prev);
  };
  return (
    <Flex style={{ position: "relative", overflow: "hidden", height: 500 }}>
      <LoiginForm
        isLogin={isLogin}
        toggleAuth={(e: FormEvent<HTMLButtonElement>) => toggleAuth(e)}
      />
      <SignupForm
        isLogin={isLogin}
        toggleAuth={(e: FormEvent<HTMLButtonElement>) => toggleAuth(e)}
      />
    </Flex>
  );
};

export default AuthForm;
