import type { ReactElement } from "react";

type Variants = "primary" | "secondary";

interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullwidth?: boolean;
  loading?: boolean;
}

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

const defaultStyles = "rounded-md p-4 flex items-center cursor-pointer";

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      } ${props.fullwidth ? "w-full flex justify-center items-center" : ""} ${
        props.loading ? "opacity-45" : ""
      } `}
      disabled={props.loading}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
      {props.text}{" "}
      {props.endIcon ? <div className="pl-2">{props.endIcon}</div> : null}
    </button>
  );
};
