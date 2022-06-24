import { useEffect } from "react";

import { useRouter } from "next/router";

import useAuth from "./auth";

type Args = {
  middleware: string;
  allowedRole?: number;
};

const useMiddleware = ({ middleware, allowedRole }: Args) => {
  const { auth } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (allowedRole && auth?.role === allowedRole) {
      router.push("/");
    }

    if (middleware === "auth" && !auth?.accessToken) {
      router.push("/login");
    }

    if (middleware === "guest" && auth?.accessToken) {
      router.push("/");
    }
  }, [auth]);
};

export default useMiddleware;
