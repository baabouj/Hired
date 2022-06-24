import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useAuth, useAxiosPrivate } from "../../hooks";
import Button from "../Button";

const Header: FC = () => {
  const { auth, setAuth } = useAuth();

  const axiosPrivate = useAxiosPrivate();

  const [isLoggedIn, setIsLoggedIn] = useState(!!auth?.accessToken);

  const logout = async () => {
    await axiosPrivate.post("/auth/logout");
    setAuth({});
    setIsLoggedIn(false);
  };

  return (
    <header className="flex justify-between items-center w-full pb-4 pt-2 px-20">
      <h1 className="text-3xl w-1/4 font-bold font-body text-primary">
        <Link href="/">Hired</Link>
      </h1>
      <ul className="self-center hidden w-2/4 justify-center items-center font-body font-medium lg:flex">
        <li className="mx-3">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-3 opacity-40 hover:opacity-100 transition-all">
          <Link href="/jobs">Browse jobs</Link>
        </li>
        <li className="mx-3 opacity-40 hover:opacity-100 transition-all">
          <Link href="/about">About us</Link>
        </li>
        <li className="mx-3 opacity-40 hover:opacity-100 transition-all">
          <Link href="/about">Post a job</Link>
        </li>
        <li className="mx-3 opacity-40 hover:opacity-100 transition-all">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
      <div className="flex w-1/4 justify-end font-body">
        {/* <button className="p-2 mr-4">Sign in</button> */}
        {isLoggedIn ? (
          <Button label="Logout" onClick={logout} />
        ) : (
          <>
            <Button label="Log in" href="/login" />
            <Button
              primary
              label="Sign up"
              className="py-1 px-3"
              href="/signup"
            />
          </>
        )}
        {/* <button className="bg-primary text-white font-medium py-2 px-3 rounded-lg">
          Sign up
        </button> */}
      </div>
    </header>
  );
};

export default Header;
