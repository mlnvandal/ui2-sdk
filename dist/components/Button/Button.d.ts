import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
export type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive" | "ghost" | "link" | "outline" | "default";
export type ButtonSize = "m" | "l" | "sm" | "lg" | "default" | "icon";
export type ButtonProps<T extends ElementType = "button"> = {
    as?: T;
    asChild?: boolean;
    active?: boolean;
    block?: boolean;
    disabled?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    icon?: ReactNode;
    textColor?: string;
    leadingVisual?: ReactNode;
    trailingVisual?: ReactNode;
    className?: string;
    children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "disabled">;
export declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps<ElementType>, "ref"> & import("react").RefAttributes<HTMLElement>>;
