import React from "react";

import "./Buttons.scss";

interface TextButtonProps {
  text: string;
  style?: React.CSSProperties;
  outline?: boolean;
}

export function TextButton({ text, style, outline = false }: TextButtonProps) {
  const className = `button ${outline ? "outline" : ""}`;

  return (
    <button style={style} className={className}>
      {text}
    </button>
  );
}
