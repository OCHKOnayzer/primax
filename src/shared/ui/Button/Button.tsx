import React from "react";
import clsx from "clsx";

import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  type,
  foreground,
  hoverForeground,
  onClick,
  disabled,
  className,
}) => {
  const variantButtonStyles = {
    default: "text-gray-900,",
    bordered: `border-[2px]  ${foreground ? `border-[${foreground}]` : "#ffffff53"} rounded-[10px] text-gray-900 hover:border-[${hoverForeground}]`,
  };
  const sizesButtonsStyles = {
    sm: "px-1 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        "transition font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
        variantButtonStyles[variant],
        sizesButtonsStyles[size],
        className,
      )}
    >
      {children}
    </button>
  );
};
