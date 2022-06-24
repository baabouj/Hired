import axios from "../lib/axios";
import { useAuth } from ".";
import { useEffect } from "react";

const useRefresh = () => {
  const { setAuth } = useAuth();

  useEffect(() => {
    const requestIntercept = axios.interceptors.request.use(
      (config) => {
        config.withCredentials = true;
        return config;
      },
      (error) => Promise.reject(error)
    );
    return () => {
      axios.interceptors.request.eject(requestIntercept);
    };
  }, []);

  const refresh = async () => {
    // console.log("REFRESH");

    // try {
    const response = await axios.post("/auth/refresh");
    setAuth((prev: any) => {
      console.log({ prev });
      return {
        ...prev,
        role: response.data.role,
        accessToken: response.data.access_token,
      };
    });
    return response.data.access_token;
    // } catch (error) {
    //   console.log("ERROR");
    // }
  };
  return refresh;
};

export default useRefresh;
