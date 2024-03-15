import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../apis/firebase";
import { Flex } from "../components/shared";
import { useEffect } from "react";

const TestPage = () => {
  const email = "kangsinbeom2448@gmail.com";
  const password = "aaaa1234!";

  const provider = new GoogleAuthProvider();
  const handleLogiin = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => console.log(result))
      .catch((e) => console.error(e));
  };

  const handleEmailSignup = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((e) => console.error(e));
  };
  const handleEmailLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
      .catch((e) => console.error(e));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) console.log("user", user);
      else console.log("nononono");
    });
  }, []);
  return (
    <Flex $direction="column" style={{ gap: 200 }}>
      <button onClick={handleEmailSignup}>이메일로 회원가입 해보자</button>
      <button onClick={handleEmailLogin}>이메일로 로그인 해보자</button>
      <button onClick={handleLogiin}>구글 로그인을 해보자</button>
      <button onClick={() => signOut(auth)}>로그아웃하기</button>
    </Flex>
  );
};

export default TestPage;

// 자동으로 유니크한 값에 대해서 구분을 해주는 것 같다.
