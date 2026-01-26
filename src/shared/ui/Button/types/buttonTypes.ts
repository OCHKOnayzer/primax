import { ReactNode } from "react";
import { ButtonVariant, ButtonType } from "./enums";
import type { CommonProps } from "@/types";

export interface ButtonProps extends CommonProps {
  children?: ReactNode;
  variant: ButtonVariant;
  type: ButtonType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
}
