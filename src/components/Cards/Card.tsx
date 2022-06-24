import { FC } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Card: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`flex-1 bg-white relative font-body px-6 py-4 rounded-xl shadow hover:shadow-lg cursor-pointer transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
