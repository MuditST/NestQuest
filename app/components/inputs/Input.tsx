'use client';

import clsx from "clsx";
import { 
  FieldErrors, 
  FieldValues, 
  UseFormRegister 
} from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
  disabled?: boolean;
  secondary?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  register,
  required,
  errors,
  type = 'text',
  disabled,
  secondary
}) => {
  return ( 
    <div>
        <label htmlFor={id}
        className={clsx("block text-sm leading-6 text-gray-200", secondary && "text-gray-900")}>
            {label}
        </label>
        <div className="
        mt-2">
            <input type={type}
            id={id}
            autoComplete={id}
            disabled={disabled}
            {...register(id,{required})}
            className={clsx("form-input block w-full rounded-lg border-0 bg-gray-900/30 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6", errors[id] && "focus:ring-rose-700", disabled && "opacity-50 cursor-default", secondary && "text-gray-900")} />

        </div>
    </div>
   );
}
 
export default Input;