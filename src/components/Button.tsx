import Link from "next/link";
import { FC } from "react";

type Props = {
  primary?: boolean;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
};

const Button: FC<Props> = ({ label, className, primary, href, onClick }) => {
  if (href) {
    return (
      <Link href={href}>
        <a
          className={`${
            primary && "bg-primary text-white shadow rounded-lg"
          } w-fit py-3 px-8 my-3 capitalize transition-all duration-500 ${className}`}
        >
          {label}
        </a>
      </Link>
    );
  }
  return (
    <button
      className={`${
        primary && "bg-primary text-white shadow rounded-lg"
      } w-fit py-3 px-8 my-3 capitalize transition-all duration-500 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
