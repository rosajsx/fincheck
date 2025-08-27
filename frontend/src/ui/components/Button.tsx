import type { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
}

export function Button({
  className,
  isLoading,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled || isLoading}
      className={cn(
        "bg-teal-900 px-6 h-12 rounded-2xl text-white font-medium transition-all  hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 flex justify-center items-center",
        className
      )}
    >
      {isLoading ? <Spinner className="w-6 h-6" /> : children}
    </button>
  );
}
