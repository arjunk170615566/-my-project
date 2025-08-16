import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  loading?: boolean;
  clearable?: boolean;
}

const sizeClasses: Record<string, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses: Record<string, string> = {
  filled: "bg-gray-100 border border-transparent focus:border-blue-500",
  outlined: "border border-gray-300 focus:border-blue-500",
  ghost: "bg-transparent border-b border-gray-300 focus:border-blue-500",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  loading,
  clearable,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <div className="relative flex items-center">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          aria-invalid={invalid}
          className={`w-full rounded-lg outline-none transition 
            ${sizeClasses[size]} ${variantClasses[variant]}
            ${invalid ? "border-red-500" : ""} 
            ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}`}
        />

        {loading && (
          <div className="absolute right-3 h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        )}

        {clearable && value && (
          <button
            type="button"
            onClick={() => onChange?.({ target: { value: "" } } as any)}
            className="absolute right-8 text-gray-500 text-sm"
          >
            ✕
          </button>
        )}

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 text-gray-500 text-sm"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {invalid && errorMessage ? (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      ) : (
        helperText && <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};
