import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

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

export function Button<T extends ElementType = "button">({
  as,
  active = false,
  block = false,
  disabled = false,
  size = "m",
  variant = "primary",
  icon,
  textColor,
  leadingVisual,
  trailingVisual,
  className,
  children,
  ...rest
}: ButtonProps<T>) {
  const Component = (as ?? "button") as ElementType;
  const leading = leadingVisual ?? icon;

  return (
    <Component
      className={clsx(
        styles.root,
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        active && styles.active,
        block && styles.block,
        disabled && styles.disabled,
        className,
      )}
      style={textColor ? ({ "--ui2-button-text-color": `var(${textColor})` } as CSSProperties) : undefined}
      data-ui2-component="Button"
      disabled={Component === "button" ? disabled : undefined}
      {...rest}
    >
      {leading ? <span className={styles.visual}>{leading}</span> : null}
      {children}
      {trailingVisual ? <span className={styles.visual}>{trailingVisual}</span> : null}
    </Component>
  );
}
