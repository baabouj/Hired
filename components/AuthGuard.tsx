import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Roles from "../constants/roles";
import { useAuth } from "../hooks";
import Spinner from "./Spinner";

type Props = {
  roles?: Roles | Roles[];
  middleware?: "auth" | "guest";
  children: React.ReactNode;
};

const AuthGuard: FC<Props> = ({ roles, middleware, children }) => {
  const { auth } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (
      roles &&
      (Array.isArray(roles)
        ? !roles.includes(auth?.role)
        : auth?.role !== roles)
    ) {
      router.push("/");
    } else if (middleware === "auth" && !auth?.accessToken) {
      router.push("/login");
    } else if (middleware === "guest" && auth?.accessToken) {
      router.push("/");
    } else setIsLoading(false);
  }, []);

  return <>{isLoading ? <Spinner /> : children}</>;
};

export default AuthGuard;
