import type { KeyboardEventHandler, MouseEventHandler, ReactNode } from "react";
type ActionMenuHostProps = {
    onClick: MouseEventHandler;
    onKeyDown: KeyboardEventHandler;
    "aria-haspopup": boolean;
    "aria-expanded": boolean;
    ref: (node: HTMLElement | null) => void;
};
export declare function ActionMenu({ open: openProp, onOpenChange, host, children, className, zIndex, }: {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    host: (props: {
        open: boolean;
        hostProps: ActionMenuHostProps;
    }) => ReactNode;
    children: ReactNode;
    className?: string;
    zIndex?: number;
}): import("react/jsx-runtime").JSX.Element;
export {};
