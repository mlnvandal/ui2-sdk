import type { ButtonHTMLAttributes, ComponentPropsWithoutRef, CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
export type SidebarProfileProps = {
    initials: string;
    name?: string;
    username?: string;
    collapsed?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare function SidebarProfile({ initials, name, username, collapsed, className, ...rest }: SidebarProfileProps): import("react/jsx-runtime").JSX.Element;
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
    renderTooltip?: (props: {
        content: string;
        children: ReactNode;
    }) => ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export declare function SidebarPinnedButtons({ actions, collapsed, renderTooltip, className, ...rest }: SidebarPinnedButtonsProps): import("react/jsx-runtime").JSX.Element;
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
export declare function SidebarItem<T extends ElementType = "button">({ icon, showIcon, label, compact, active, expanded, disabled, pseudoHover, chevron, as, className, ...rest }: SidebarItemProps<T>): import("react/jsx-runtime").JSX.Element;
export type SidebarFooterProps = {
    collapsed?: boolean;
    version?: string;
    logo?: ReactNode;
    toggle?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export declare function SidebarFooter({ collapsed, version, logo, toggle, className, ...rest }: SidebarFooterProps): import("react/jsx-runtime").JSX.Element;
export declare function SidebarNav(props: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export type SidebarIconButtonProps = {
    icon: ReactNode;
    label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare function SidebarIconButton({ icon, label, className, ...rest }: SidebarIconButtonProps): import("react/jsx-runtime").JSX.Element;
export type SidebarPopoverProps = {
    title: string;
    style?: CSSProperties;
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export declare const SidebarPopover: import("react").ForwardRefExoticComponent<{
    title: string;
    style?: CSSProperties;
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
