import { useState, useEffect, FC } from "react";

import { useAuth, useRefresh } from "../hooks";

import Spinner from "./Spinner";

const PersistAuth: FC<any> = ({ children }) => {
  const refresh = useRefresh();

  const { auth, persist } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err: any) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    // console.log({
    //   verfy: !auth?.accessToken && persist,
    //   auth: auth,
    //   persist,
    // });

    !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return <>{!persist ? children : isLoading ? <Spinner /> : children}</>;
};

export default PersistAuth;
