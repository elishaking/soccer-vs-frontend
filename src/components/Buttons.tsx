import React from "react";

import "./Buttons.scss";

interface TextButtonProps {
  text: string;
}

export function TextButton({ text }: TextButtonProps) {
  return <button className="button">{text}</button>;
}
