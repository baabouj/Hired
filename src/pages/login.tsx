import { useEffect, useState } from "react";

import { NextPage } from "next";
import { useRouter } from "next/router";

import * as validator from "js-validation-helper";

import { AuthGuard, Button, Input, Layout } from "@/components";
import { useAuth } from "@/hooks";
import axios from "@/lib/axios";

const Login: NextPage = () => {
  const { setAuth, persist, setPersist } = useAuth();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validator.validate(
      {
        email,
        password,
      },
      {
        email: [
          ["required", "email is required"],
          ["email", "email must be valid"],
        ],
        password: [
          ["required", "password is required"],
          ["min:8", "password must be at least 8 characters"],
        ],
      }
    );

    if (validationErrors) {
      setErrors({
        email: validationErrors.email ? validationErrors.email[0] : "",
        password: validationErrors.password ? validationErrors.password[0] : "",
      });
      return;
    }

    try {
      const response = await axios.post(
        "/auth/login",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.access_token;
      const role = response?.data?.role;
      setAuth({ role, accessToken });
      router.back();
    } catch (err) {
      setErrors({
        email: "invalid credentials",
        password: "invalid credentials",
      });
    }
  };

  const togglePersist = () => {
    setPersist((prev: boolean) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <Layout>
      <AuthGuard middleware="guest">
        <form
          className="flex flex-col items-center justify-center m-auto"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-bold py-4">Login</h1>
          <Input
            label="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <Input
            label="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
          <div className="self-start my-2 px-1">
            <label
              className="flex items-center justify-between mb-2"
              htmlFor="persist"
            >
              <input
                className="bg-transparent border-none w-4 h-4 mr-2"
                type="checkbox"
                id="persist"
                checked={persist}
                onChange={togglePersist}
              />
              <span className="text-sm text-dark/80">Remember Me</span>
            </label>
          </div>
          <Button primary label="continue" />
        </form>
      </AuthGuard>
    </Layout>
  );
};

export default Login;
