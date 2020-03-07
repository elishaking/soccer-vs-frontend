import React from "react";

import "./Buttons.scss";

interface TextButtonProps {
  text: string;
  style?: React.CSSProperties;
  outline?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function TextButton({
  text,
  style,
  outline = false,
  onClick
}: TextButtonProps) {
  const className = `button ${outline ? "outline" : ""}`;

  return (
    <button style={style} className={className} onClick={onClick}>
      {text}
    </button>
  );
}
