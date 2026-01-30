import type { ReactNode } from "react";
export type PopoverPlacement = "bottom-start" | "bottom-end" | "top-start" | "top-end";
export declare function Popover({ open, anchorRect, placement, offset, zIndex, children, }: {
    open: boolean;
    anchorRect: DOMRect | null;
    placement?: PopoverPlacement;
    offset?: number;
    zIndex?: number;
    children: ReactNode;
}): import("react").ReactPortal | null;
