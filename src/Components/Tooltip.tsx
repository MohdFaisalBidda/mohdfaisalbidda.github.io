"use client";

import React, { useState } from "react";

type TooltipProps = {
  children: React.ReactNode; // The element that triggers the tooltip
  content: React.ReactNode; // The content of the tooltip
  position?: "top" | "bottom" | "left" | "right"; // Tooltip position
  offset?: number; // Distance from the trigger element
  className?: string; // Custom class for the tooltip
};

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = "top",
  offset = 8,
  className = "",
}) => {
  const [visible, setVisible] = useState(false);

  const tooltipPosition = () => {
    switch (position) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-2";
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-2";
      default:
        return "";
    }
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="cursor-pointer"
      >
        {children}
      </div>

      {visible && (
        <div
          className={`absolute z-50 px-2 py-1 text-xs dark:text-white text-black dark:bg-primary bg-white rounded shadow-lg ${tooltipPosition()} ${className}`}
          style={{
            marginTop: position === "bottom" ? offset : undefined,
            marginBottom: position === "top" ? offset : undefined,
            marginLeft: position === "right" ? offset : undefined,
            marginRight: position === "left" ? offset : undefined,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
