import type { CSSProperties, ReactNode } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { IconChevronDown, IconChevronUp, IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";
import styles from "./Sidebar.module.css";
import { pointInSafeZone } from "./sidebarHoverIntent";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import {
  SidebarFooter as SidebarFooterPart,
  SidebarItem,
  SidebarNav,
  SidebarPinnedButtons,
  SidebarPopover,
  SidebarProfile,
} from "./SidebarParts";

export type SidebarNavChild = {
  id?: string;
  title: string;
  icon?: ReactNode;
  showIcon?: boolean;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
};

export type SidebarNavItem = {
  id: string;
  title: string;
  icon?: ReactNode;
  showIcon?: boolean;
  disabled?: boolean;
  active?: boolean;
  children?: SidebarNavChild[];
  defaultExpanded?: boolean;
  onClick?: () => void;
};

export type SidebarPinnedAction = {
  id: string;
  icon: ReactNode;
  label: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
};

export type SidebarAccount = {
  initials: string;
  name?: string;
  username?: string;
  onClick?: () => void;
};

export type SidebarFooter = {
  version?: string;
  logoExpandedSrc?: string;
  logoCollapsedSrc?: string;
  logoAlt?: string;
  logoExpandedWidth?: number;
  logoCollapsedWidth?: number;
  onToggle?: () => void;
  toggleExpandedLabel?: string;
  toggleCollapsedLabel?: string;
  toggleButton?: ReactNode;
};

export type SidebarProps = {
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  account?: SidebarAccount;
  pinnedActions?: SidebarPinnedAction[];
  navItems: SidebarNavItem[];
  footer?: SidebarFooter;
  className?: string;
  style?: CSSProperties;
  renderTooltip?: (props: RenderTooltipProps) => ReactNode;
  onItemClick?: (item: SidebarNavItem) => void;
  onChildClick?: (child: SidebarNavChild, parent: SidebarNavItem) => void;
};

type RenderTooltipProps = { content: string; children: ReactNode };

function defaultRenderTooltip({ content, children }: RenderTooltipProps) {
  return (
    <span className={styles.tooltipHost} title={content}>
      {children}
    </span>
  );
}

export function Sidebar({
  collapsed: collapsedProp,
  defaultCollapsed = false,
  onCollapsedChange,
  account,
  pinnedActions = [],
  navItems,
  footer,
  className,
  style,
  renderTooltip,
  onItemClick,
  onChildClick,
}: SidebarProps) {
  const tooltipRenderer = renderTooltip ?? defaultRenderTooltip;
  const [collapsedState, setCollapsedState] = useState(defaultCollapsed);
  const collapsed = collapsedProp ?? collapsedState;
  const [activePopoverId, setActivePopoverId] = useState<string | null>(null);
  const [popoverRect, setPopoverRect] = useState<DOMRect | null>(null);
  const popoverHover = useRef(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const anchorRectRef = useRef<DOMRect | null>(null);
  const hoverIntent = useRef<{ active: boolean }>({ active: false });
  const closeTimer = useRef<number | null>(null);

  const expandedById = useMemo(() => {
    const map = new Map<string, boolean>();
    navItems.forEach((item) => {
      if (item.defaultExpanded) {
        map.set(item.id, true);
      }
      if (item.children?.some((child) => child.active)) {
        map.set(item.id, true);
      }
    });
    return map;
  }, [navItems]);

  const [expandedState, setExpandedState] = useState(() => expandedById);

  const setCollapsed = useCallback(
    (next: boolean) => {
      if (onCollapsedChange) {
        onCollapsedChange(next);
      } else {
        setCollapsedState(next);
      }
    },
    [onCollapsedChange],
  );

  const openPopover = useCallback((id: string, rect: DOMRect) => {
    setActivePopoverId(id);
    setPopoverRect(rect);
    anchorRectRef.current = rect;
  }, []);

  const closePopover = useCallback(() => {
    if (popoverHover.current) {
      return;
    }
    setActivePopoverId(null);
    setPopoverRect(null);
  }, []);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(
    (delay = 260) => {
      clearCloseTimer();
      closeTimer.current = window.setTimeout(() => {
        if (!popoverHover.current) {
          hoverIntent.current.active = false;
          closePopover();
        }
      }, delay);
    },
    [clearCloseTimer, closePopover],
  );

  const toggleExpanded = useCallback((id: string) => {
    setExpandedState((prev) => {
      const next = new Map(prev);
      next.set(id, !prev.get(id));
      return next;
    });
  }, []);

  useEffect(() => {
    if (!collapsed || !activePopoverId) {
      return;
    }

    const onMove = (event: MouseEvent) => {
        if (!hoverIntent.current.active) {
          return;
        }
        if (popoverHover.current || !popoverRef.current || !anchorRectRef.current) {
          return;
        }
        const rect = popoverRef.current.getBoundingClientRect();
        const point = { x: event.clientX, y: event.clientY };
        const inZone = pointInSafeZone(point, anchorRectRef.current, rect, 10);
        if (!inZone) {
          hoverIntent.current.active = false;
          closePopover();
        } else {
          clearCloseTimer();
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, [activePopoverId, collapsed, clearCloseTimer, closePopover]);

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer]);

  return (
    <div
      data-ui2-component="Sidebar"
      data-collapsed={collapsed ? "true" : "false"}
      className={clsx(styles.root, collapsed && styles.collapsed, className)}
      style={style}
    >
      <div className={styles.header}>
        {account ? (
          <SidebarProfile
            initials={account.initials}
            name={account.name}
            username={account.username}
            collapsed={collapsed}
            onClick={account.onClick}
          />
        ) : null}
        <SidebarPinnedButtons actions={pinnedActions} collapsed={collapsed} renderTooltip={tooltipRenderer} />
      </div>

      <SidebarNav onClick={() => setActivePopoverId(null)}>
        {navItems.map((item) => {
          const hasChildren = Boolean(item.children?.length);
          const expanded = expandedState.get(item.id) ?? false;
          const isPopoverOpen = collapsed && activePopoverId === item.id && hasChildren && !item.disabled;
          const isCompactWithChildren = collapsed && hasChildren;
          const link = (
            <SidebarItem
              icon={item.icon}
              showIcon={item.showIcon}
              label={item.title}
              compact={collapsed}
              active={item.active}
              expanded={hasChildren && expanded}
              disabled={item.disabled}
              pseudoHover={isPopoverOpen}
              chevron={
                !collapsed && hasChildren
                  ? expanded
                    ? <IconChevronUp size={16} />
                    : <IconChevronDown size={16} />
                  : undefined
              }
              onClick={() => {
                if (hasChildren && !collapsed) {
                  toggleExpanded(item.id);
                  return;
                }
                if (!item.disabled) {
                  onItemClick?.(item);
                  item.onClick?.();
                }
              }}
            />
          );

          return (
            <div
              key={item.id}
              className={styles.menuItem}
              onMouseEnter={(event) => {
                if (!collapsed || !hasChildren || item.disabled) {
                  return;
                }
                hoverIntent.current.active = false;
                clearCloseTimer();
                openPopover(item.id, event.currentTarget.getBoundingClientRect());
              }}
              onMouseLeave={(event) => {
                if (!collapsed) {
                  return;
                }
                if (!hasChildren || item.disabled) {
                  closePopover();
                  return;
                }
                hoverIntent.current.active = true;
                scheduleClose();
              }}
              onFocus={() => {
                if (!collapsed || !hasChildren || item.disabled) {
                  return;
                }
                const rect = document.getElementById(`ui2-sidebar-item-${item.id}`)?.getBoundingClientRect();
                if (rect) {
                  openPopover(item.id, rect);
                }
              }}
            >
              <div id={`ui2-sidebar-item-${item.id}`}>{link}</div>
              {hasChildren && !collapsed && expanded ? (
                <div className={styles.children}>
                  {item.children?.map((child) => (
                    <div key={child.id ?? child.title}>
                      <button
                        type="button"
                        className={clsx(
                          styles.child,
                          child.active && styles.childActive,
                          child.disabled && styles.childDisabled,
                        )}
                        disabled={child.disabled}
                        onClick={child.disabled ? undefined : () => {
                          onChildClick?.(child, item);
                          child.onClick?.();
                        }}
                      >
                        {child.icon && child.showIcon !== false ? (
                          <span className={styles.childIcon}>{child.icon}</span>
                        ) : null}
                        <span className={styles.childText}>{child.title}</span>
                      </button>
                    </div>
                  ))}
                </div>
              ) : null}
              {hasChildren && isPopoverOpen && popoverRect ? (
                <SidebarPopover
                  ref={popoverRef}
                  title={item.title}
                  style={{
                    position: "fixed",
                    top: Math.round(popoverRect.top),
                    left: Math.round(popoverRect.right + 12),
                  }}
                  onMouseEnter={() => {
                    popoverHover.current = true;
                    hoverIntent.current.active = false;
                    clearCloseTimer();
                  }}
                  onMouseLeave={() => {
                    popoverHover.current = false;
                    scheduleClose(120);
                  }}
                >
                  {item.children?.map((child) => (
                    <div key={child.id ?? child.title}>
                      <button
                        type="button"
                        className={clsx(
                          styles.child,
                          child.active && styles.childActive,
                          child.disabled && styles.childDisabled,
                        )}
                        disabled={child.disabled}
                        onClick={child.disabled ? undefined : () => {
                          onChildClick?.(child, item);
                          child.onClick?.();
                        }}
                      >
                        {child.icon && child.showIcon !== false ? (
                          <span className={styles.childIcon}>{child.icon}</span>
                        ) : null}
                        <span className={styles.childText}>{child.title}</span>
                      </button>
                    </div>
                  ))}
                </SidebarPopover>
              ) : null}
            </div>
          );
        })}
      </SidebarNav>

      <SidebarFooterPart
        collapsed={collapsed}
        version={footer?.version}
        logo={
          <>
            {footer?.logoCollapsedSrc && collapsed ? (
              <img src={footer.logoCollapsedSrc} alt={footer.logoAlt ?? "Logo"} width={footer.logoCollapsedWidth ?? 32} />
            ) : null}
            {footer?.logoExpandedSrc && !collapsed ? (
              <img src={footer.logoExpandedSrc} alt={footer.logoAlt ?? "Logo"} width={footer.logoExpandedWidth ?? 131} />
            ) : null}
          </>
        }
        toggle={
          footer?.toggleButton ? (
            footer.toggleButton
          ) : (
            <ButtonIcon
              aria-label={collapsed ? footer?.toggleCollapsedLabel ?? "Expand" : footer?.toggleExpandedLabel ?? "Collapse"}
              variant="tertiary"
              textColor="--ui2-content-secondary"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? <IconChevronsRight size={18} /> : <IconChevronsLeft size={18} />}
            </ButtonIcon>
          )
        }
      />
    </div>
  );
}
