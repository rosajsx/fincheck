import { CrossCircledIcon } from "@radix-ui/react-icons";
import type { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export function Input({
  name,
  placeholder,
  id,
  error,
  className,
  ...rest
}: InputProps) {
  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        {...rest}
        name={name}
        id={inputId}
        className={cn(
          "w-full bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 transition-all peer placeholder-shown:pt-0 focus:outline-none focus:border-gray-900 outline-none",
          error && "!border-red-900",
          className
        )}
        placeholder=" "
      />
      <label
        htmlFor={inputId}
        className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base "
      >
        {placeholder}
      </label>
      {error && (
        <div className="flex items-center gap-2 mt-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
}
