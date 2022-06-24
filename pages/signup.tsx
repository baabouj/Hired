import { useState } from "react";

import { NextPage } from "next";

import { Button, Input, Layout } from "../components";
import { useAuth, useMiddleware } from "../hooks";

import * as validator from "js-validation-helper";
import axios from "../lib/axios";
import { useRouter } from "next/router";

const Signup: NextPage = () => {
  useMiddleware({ middleware: "guest" });

  const { setAuth } = useAuth();

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validator.validate(
      {
        name,
        email,
        password,
      },
      {
        name: [["required", "name is required"]],
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
      console.log(validationErrors);

      setErrors({
        name: validationErrors.name ? validationErrors.name[0] : "",
        email: validationErrors.email ? validationErrors.email[0] : "",
        password: validationErrors.password ? validationErrors.password[0] : "",
      });
      return;
    }

    try {
      const response = await axios.post(
        "/auth/signup",
        {
          name,
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
        name: "invalid credentials",
        email: "invalid credentials",
        password: "invalid credentials",
      });
    }
  };

  return (
    <Layout>
      <form
        className="flex flex-col items-center justify-center m-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold py-4">Sign up</h1>
        <Input
          label="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
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
        <Button primary label="continue" />
      </form>
    </Layout>
  );
};

export default Signup;
