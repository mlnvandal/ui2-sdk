import type { ButtonHTMLAttributes, ComponentPropsWithoutRef, CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import clsx from "clsx";
import styles from "./Sidebar.module.css";

export type SidebarProfileProps = {
  initials: string;
  name?: string;
  username?: string;
  collapsed?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SidebarProfile({ initials, name, username, collapsed = false, className, ...rest }: SidebarProfileProps) {
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

export type SidebarPinnedAction = {
  id: string;
  icon: ReactNode;
  label: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
};

export type SidebarPinnedButtonsProps = {
  actions: SidebarPinnedAction[];
  collapsed?: boolean;
  renderTooltip?: (props: { content: string; children: ReactNode }) => ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function SidebarPinnedButtons({
  actions,
  collapsed = false,
  renderTooltip,
  className,
  ...rest
}: SidebarPinnedButtonsProps) {
  return (
    <div className={clsx(styles.buttons, collapsed && styles.buttonsCollapsed, className)} {...rest}>
      {actions.map((action) => {
        const content = (
          <button
            key={action.id}
            type="button"
            className={clsx(
              styles.headerButton,
              action.active && styles.headerButtonActive,
              action.disabled && styles.headerButtonDisabled,
            )}
            onClick={action.disabled ? undefined : action.onClick}
            aria-label={action.label}
            style={{ "--ui2-sidebar-pinned-icon-color": "var(--ui2-content-secondary)" } as CSSProperties}
          >
            {action.icon}
          </button>
        );
        return renderTooltip ? (
          <div key={action.id} className={styles.pinnedButtonWrap}>
            {renderTooltip({ content: action.label, children: content })}
          </div>
        ) : (
          <div key={action.id} className={styles.pinnedButtonWrap}>
            {content}
          </div>
        );
      })}
    </div>
  );
}


export type SidebarItemProps<T extends ElementType = "button"> = {
  icon?: ReactNode;
  showIcon?: boolean;
  label: string;
  compact?: boolean;
  active?: boolean;
  expanded?: boolean;
  disabled?: boolean;
  pseudoHover?: boolean;
  chevron?: ReactNode;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export function SidebarItem<T extends ElementType = "button">({
  icon,
  showIcon = true,
  label,
  compact = false,
  active,
  expanded,
  disabled,
  pseudoHover,
  chevron,
  as,
  className,
  ...rest
}: SidebarItemProps<T>) {
  const Component = (as ?? "button") as ElementType;

  return (
    <Component
      {...(Component === "button" ? { type: "button", disabled } : null)}
      className={clsx(
        styles.menuButton,
        compact && styles.menuButtonCompact,
        active && styles.menuButtonActive,
        expanded && styles.menuButtonExpanded,
        disabled && styles.menuButtonDisabled,
        pseudoHover && styles.menuButtonPseudoHover,
        className,
      )}
      {...rest}
    >
      {icon && showIcon ? <span className={styles.menuButtonIcon}>{icon}</span> : null}
      {!compact ? <span className={styles.menuButtonText}>{label}</span> : null}
      {!compact && chevron ? <span className={styles.menuButtonChevron}>{chevron}</span> : null}
    </Component>
  );
}

export type SidebarFooterProps = {
  collapsed?: boolean;
  version?: string;
  logo?: ReactNode;
  toggle?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function SidebarFooter({ collapsed = false, version, logo, toggle, className, ...rest }: SidebarFooterProps) {
  return (
    <div
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

export function SidebarNav(props: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx(styles.nav, props.className)} {...props} />;
}

export type SidebarIconButtonProps = {
  icon: ReactNode;
  label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SidebarIconButton({ icon, label, className, ...rest }: SidebarIconButtonProps) {
  return (
    <button type="button" aria-label={label} className={clsx(styles.iconButton, className)} {...rest}>
      {icon}
    </button>
  );
}

export type SidebarPopoverProps = {
  title: string;
  style?: CSSProperties;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const SidebarPopover = forwardRef<HTMLDivElement, SidebarPopoverProps>(
  ({ title, children, className, ...rest }, ref) => (
    <div ref={ref} className={clsx(styles.popover, className)} {...rest}>
      <div className={styles.popoverTitle}>{title}</div>
      {children}
    </div>
  ),
);

SidebarPopover.displayName = "SidebarPopover";
