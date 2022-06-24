import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex h-24 w-full text-sm font-body text-gray-800 items-center justify-center border-t px-20">
      © {new Date().getFullYear()} Hired All Rights Reserved
    </footer>
  );
};

export default Footer;
