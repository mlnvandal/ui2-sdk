import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
export type SidebarShellProps = HTMLAttributes<HTMLDivElement> & {
    collapsed?: boolean;
};
export declare function SidebarShell({ collapsed, className, ...rest }: SidebarShellProps): import("react/jsx-runtime").JSX.Element;
export declare function SidebarHeader(props: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export type SidebarAccountButtonProps = {
    initials: string;
    name?: string;
    username?: string;
    collapsed?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare function SidebarAccountButton({ initials, name, username, collapsed, className, ...rest }: SidebarAccountButtonProps): import("react/jsx-runtime").JSX.Element;
export type SidebarHeaderButtonProps = {
    icon: ReactNode;
    label: string;
    active?: boolean;
    disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare function SidebarHeaderButton({ icon, label, active, disabled, className, ...rest }: SidebarHeaderButtonProps): import("react/jsx-runtime").JSX.Element;
export declare function SidebarNav(props: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export type SidebarNavButtonProps = {
    icon?: ReactNode;
    label: string;
    compact?: boolean;
    active?: boolean;
    disabled?: boolean;
    pseudoHover?: boolean;
    chevron?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare function SidebarNavButton({ icon, label, compact, active, disabled, pseudoHover, chevron, className, ...rest }: SidebarNavButtonProps): import("react/jsx-runtime").JSX.Element;
export type SidebarChildButtonProps = {
    label: string;
    icon?: ReactNode;
    active?: boolean;
    disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare function SidebarChildButton({ label, icon, active, disabled, className, ...rest }: SidebarChildButtonProps): import("react/jsx-runtime").JSX.Element;
export type SidebarFooterSectionProps = HTMLAttributes<HTMLDivElement> & {
    collapsed?: boolean;
    version?: string;
    logo?: ReactNode;
    toggle?: ReactNode;
};
export declare function SidebarFooterSection({ collapsed, version, logo, toggle, className, ...rest }: SidebarFooterSectionProps): import("react/jsx-runtime").JSX.Element;
