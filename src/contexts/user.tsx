import { createContext, FC, useEffect, useState } from "react";
import { useAuth } from "../hooks";
import axios from "../lib/axios";

const UserContext = createContext({});

export const UserProvider: FC<any> = ({ children }) => {
  const [user, setUser] = useState({});
  const { token } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
