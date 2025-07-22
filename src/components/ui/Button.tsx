type Variants = "primary" | "secondary";

interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick: () =>void;
}

const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6"  
}

const defaultStyles = "rounded-md p-4"

const variantStyles= {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}

export const Button = (props: ButtonProps) =>{
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.text}</button>
}
<Button variant="primary" size="md" onClick={() =>{}} text={"ro"}/>