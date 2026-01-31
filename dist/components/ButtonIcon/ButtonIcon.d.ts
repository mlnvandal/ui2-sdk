import type { ButtonHTMLAttributes, ReactNode } from "react";
export type ButtonIconSize = "xs" | "s" | "m" | "l";
export type ButtonIconVariant = "primary" | "secondary" | "tertiary" | "inverted" | "destructive" | "ghost" | "link" | "outline" | "default";
export type ButtonIconProps = {
    children: ReactNode;
    size?: ButtonIconSize;
    variant?: ButtonIconVariant;
    active?: boolean;
    disabled?: boolean;
    textColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare function ButtonIcon({ children, size, variant, active, disabled, textColor, className, ...rest }: ButtonIconProps): import("react/jsx-runtime").JSX.Element;
