import React, { useEffect, useState } from "react";
import "./PerformanceBar.scss";

interface PerformanceBarProps {
  right?: boolean;
  value: number;
}

export default function PerformanceBar({
  right = true,
  value
}: PerformanceBarProps) {
  let ref: React.RefObject<HTMLDivElement> = React.createRef();
  const [valueWidth, setValueWidth] = useState(0);

  useEffect(() => {
    setValueWidth((value / 100) * (ref.current?.clientWidth as number));
  }, [ref, value]);

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
          width: valueWidth
        }}
      ></div>
    </div>
  );
}
