import React, { useEffect, useState } from "react";
import "./PerformanceBar.scss";

interface PerformanceBarProps {
  right?: boolean;
  value: number;
  resize: number;
}

export default function PerformanceBar({
  right = true,
  value,
  resize
}: PerformanceBarProps) {
  let ref: React.RefObject<HTMLDivElement> = React.createRef();
  const [valueWidth, setValueWidth] = useState(0);

  useEffect(() => {
    setValueWidth((value / 100) * (ref.current?.clientWidth as number));
  }, [ref, value, resize]);

  return (
    <div
      className="performance-bar"
      style={{
        width: "30vw"
      }}
      ref={ref}
    >
      <div className="container"></div>
      <div
        className="value"
        style={{
          right: right ? 0 : undefined,
          left: right ? undefined : 0,
          width: valueWidth,
          backgroundColor: right ? "#d43861" : "rgb(182, 166, 236)"
        }}
      ></div>
    </div>
  );
}
