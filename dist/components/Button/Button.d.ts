import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "m" | "l";
export type ButtonProps<T extends ElementType = "button"> = {
    as?: T;
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
export declare function Button<T extends ElementType = "button">({ as, active, block, disabled, size, variant, icon, textColor, leadingVisual, trailingVisual, className, children, ...rest }: ButtonProps<T>): import("react/jsx-runtime").JSX.Element;
