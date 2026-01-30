import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Sidebar.module.css";

export type SidebarShellProps = HTMLAttributes<HTMLDivElement> & {
  collapsed?: boolean;
};

export function SidebarShell({ collapsed = false, className, ...rest }: SidebarShellProps) {
  return (
    <div
      data-ui2-component="SidebarShell"
      data-collapsed={collapsed ? "true" : "false"}
      className={clsx(styles.root, collapsed && styles.collapsed, className)}
      {...rest}
    />
  );
}

export function SidebarHeader(props: HTMLAttributes<HTMLDivElement>) {
  return <div data-ui2-component="SidebarHeader" className={clsx(styles.header, props.className)} {...props} />;
}

export type SidebarAccountButtonProps = {
  initials: string;
  name?: string;
  username?: string;
  collapsed?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SidebarAccountButton({
  initials,
  name,
  username,
  collapsed = false,
  className,
  ...rest
}: SidebarAccountButtonProps) {
  return (
    <button type="button" className={clsx(styles.accountButton, className)} {...rest}>
      <div className={styles.accountAvatar}>{initials}</div>
      {!collapsed ? (
        <div className={styles.accountInfo}>
          <div className={styles.accountName}>{name}</div>
          <div className={styles.accountUsername}>{username}</div>
        </div>
      ) : null}
    </button>
  );
}

export type SidebarHeaderButtonProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SidebarHeaderButton({ icon, label, active, disabled, className, ...rest }: SidebarHeaderButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      className={clsx(
        styles.headerButton,
        active && styles.headerButtonActive,
        disabled && styles.headerButtonDisabled,
        className,
      )}
      {...rest}
    >
      {icon}
    </button>
  );
}

export function SidebarNav(props: HTMLAttributes<HTMLDivElement>) {
  return <div data-ui2-component="SidebarNav" className={clsx(styles.nav, props.className)} {...props} />;
}

export type SidebarNavButtonProps = {
  icon?: ReactNode;
  label: string;
  compact?: boolean;
  active?: boolean;
  disabled?: boolean;
  pseudoHover?: boolean;
  chevron?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SidebarNavButton({
  icon,
  label,
  compact = false,
  active,
  disabled,
  pseudoHover,
  chevron,
  className,
  ...rest
}: SidebarNavButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        styles.menuButton,
        compact && styles.menuButtonCompact,
        active && styles.menuButtonActive,
        disabled && styles.menuButtonDisabled,
        pseudoHover && styles.menuButtonPseudoHover,
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      <span className={styles.menuButtonIcon}>{icon}</span>
      {!compact ? <span className={styles.menuButtonText}>{label}</span> : null}
      {!compact && chevron ? <span className={styles.menuButtonChevron}>{chevron}</span> : null}
    </button>
  );
}

export type SidebarChildButtonProps = {
  label: string;
  icon?: ReactNode;
  active?: boolean;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SidebarChildButton({ label, icon, active, disabled, className, ...rest }: SidebarChildButtonProps) {
  return (
    <button
      type="button"
      className={clsx(styles.child, active && styles.childActive, disabled && styles.childDisabled, className)}
      disabled={disabled}
      {...rest}
    >
      {icon ? <span className={styles.childIcon}>{icon}</span> : null}
      <span className={styles.childText}>{label}</span>
    </button>
  );
}

export type SidebarFooterSectionProps = HTMLAttributes<HTMLDivElement> & {
  collapsed?: boolean;
  version?: string;
  logo?: ReactNode;
  toggle?: ReactNode;
};

export function SidebarFooterSection({ collapsed = false, version, logo, toggle, className, ...rest }: SidebarFooterSectionProps) {
  return (
    <div
      data-ui2-component="SidebarFooter"
      className={clsx(styles.footer, !collapsed && styles.footerExpanded, collapsed && styles.footerCollapsed, className)}
      {...rest}
    >
      {!collapsed && version ? <div className={styles.version}>v. {version}</div> : null}
      <div className={styles.footerBottom}>
        <div className={styles.footerLogo}>{logo}</div>
        {toggle}
      </div>
    </div>
  );
}
