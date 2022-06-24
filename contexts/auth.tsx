import { createContext, FC, useEffect, useState } from "react";

const AuthContext = createContext<any>({});

export const AuthProvider: FC<any> = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [persist, setPersist] = useState<boolean>(false);

  useEffect(() => {
    console.log({ auth });
  }, [auth]);

  useEffect(() => {
    setPersist(JSON.parse(localStorage.getItem("persist") ?? "false"));
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
