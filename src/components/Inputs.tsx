import React from "react";
import "./Inputs.scss";

interface TextInputProps {
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export function TextInput({
  type,
  placeholder,
  onChange,
  value
}: TextInputProps) {
  return (
    <input
      className="text-input"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
