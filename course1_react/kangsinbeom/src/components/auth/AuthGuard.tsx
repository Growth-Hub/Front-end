import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../apis/firebase";
import { useAuthContext } from "../../contexts/AuthContext";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [initialize, setInitialize] = useState<boolean>(false);
  const { setUser } = useAuthContext();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setUser({
          uid: "",
          username: "",
          email: "",
          photoURL: "",
        });
      } else {
        setUser({
          uid: user.uid,
          username: user.displayName ?? "",
          email: user.email ?? "",
          photoURL: user.photoURL ?? "",
        });
      }
      setInitialize(true);
    });
  }, [setUser]);
  if (!initialize) return null;
  return <>{children}</>;
};

export default AuthGuard;
