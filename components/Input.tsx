import { FC } from "react";

type Props = {
  label: string;
  type: string;
  value: string;
  error: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input: FC<Props> = ({ label, type, value, error, onChange }) => {
  return (
    <div className="relative my-2">
      <input
        className="peer bg-surface caret-primary w-full text-lg font-body my-2 py-2 px-3 outline-none border-2 rounded-lg border-primary/30 focus:border-primary focus:-translate-y-1 placeholder-transparent transition-all duration-300"
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
      <label className="absolute -top-4 text-sm mr-0 px-1 left-0 bg-surface text-dark/80 my-2 mx-3 capitalize peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-dark/50 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-dark/80 transition-all duration-300">
        {label}
      </label>
      {error && (
        <p className="text-sm text-red-500 text-left first-letter:uppercase">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
