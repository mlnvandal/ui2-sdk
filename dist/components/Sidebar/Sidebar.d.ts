import type { CSSProperties, ReactNode } from "react";
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
type RenderTooltipProps = {
    content: string;
    children: ReactNode;
};
export declare function Sidebar({ collapsed: collapsedProp, defaultCollapsed, onCollapsedChange, account, pinnedActions, navItems, footer, className, style, renderTooltip, onItemClick, onChildClick, }: SidebarProps): import("react/jsx-runtime").JSX.Element;
export {};
