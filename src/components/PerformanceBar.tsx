import React from "react";
import "./PerformanceBar.scss";

interface PerformanceBarProps {
  right?: boolean;
}

export default function PerformanceBar({ right = true }: PerformanceBarProps) {
  return (
    <div
      className="performance-bar"
      style={{
        width: "30vw"
      }}
    >
      <div className="container"></div>
      <div
        className="value"
        style={{
          right: right ? 0 : undefined,
          left: right ? undefined : 0
        }}
      ></div>
    </div>
  );
}
