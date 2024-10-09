import React from "react";

// Objective: Define the props for the Button component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
}
