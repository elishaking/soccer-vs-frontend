import React from "react";
import "./Inputs.scss";

interface TextInputProps {
  type: string;
  placeholder: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export function TextInput({
  type,
  placeholder,
  name,
  onChange,
  value
}: TextInputProps) {
  return (
    <input
      className="text-input"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
