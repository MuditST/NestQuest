import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return ( 
    <button onClick={onClick}
    type={type}
    disabled={disabled}
    className={clsx("flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    disabled && "opacity-50 cursor-default hover:bg-gray-200/50",
    fullWidth && "w-full",
    secondary ? "text-white bg-emerald-500":"text-white",
    danger && "bg-rose-600 hover:bg-rose-700 focus-visible:outline-rose-700",
    !secondary && !danger && " bg-amber-500 hover:bg-amber-700 hover:text-white focus-visible:outline-amber-600 transition"
    )}>
        {children}
    </button>
   );
}
 
export default Button;