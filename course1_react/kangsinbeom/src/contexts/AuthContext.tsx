import { PropsWithChildren, createContext, useContext, useState } from "react";

interface User {
  uid: string;
  username: string;
  email: string;
  photoURL: string;
}

interface AuthContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>({
    uid: "",
    username: "",
    email: "",
    photoURL: "",
  });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context == null) {
    throw new Error("use in Context");
  }
  return context;
};
