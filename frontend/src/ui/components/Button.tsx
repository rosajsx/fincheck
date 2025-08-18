/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({ ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="bg-teal-900 px-6 h-12 rounded-2xl text-white font-medium transition-all  hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
    />
  );
}
