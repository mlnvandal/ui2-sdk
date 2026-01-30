import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import clsx from "clsx";
import styles from "./ButtonIcon.module.css";

export type ButtonIconSize = "xs" | "s" | "m" | "l";
export type ButtonIconVariant = "primary" | "secondary" | "tertiary" | "inverted";

export type ButtonIconProps = {
  children: ReactNode;
  size?: ButtonIconSize;
  variant?: ButtonIconVariant;
  active?: boolean;
  disabled?: boolean;
  textColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonIcon({
  children,
  size = "m",
  variant = "primary",
  active = false,
  disabled = false,
  textColor,
  className,
  ...rest
}: ButtonIconProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        styles.root,
        styles[`size-${size}`],
        variant !== "primary" && styles[`variant-${variant}`],
        disabled && styles.disabled,
        className,
      )}
      data-active={active ? "true" : "false"}
      style={textColor ? ({ "--ui2-button-icon-text-color": `var(${textColor})` } as CSSProperties) : undefined}
      {...rest}
    >
      <span className={styles.icon}>{children}</span>
    </button>
  );
}
