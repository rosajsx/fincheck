import type { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
}

export function Input({ name, placeholder, id, ...rest }: InputProps) {
  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        {...rest}
        name={name}
        id={inputId}
        className="w-full bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 transition-all peer placeholder-shown:pt-0 focus:outline-none focus:border-gray-900 "
        placeholder=" "
      />
      <label
        htmlFor={inputId}
        className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base "
      >
        {placeholder}
      </label>
    </div>
  );
}
