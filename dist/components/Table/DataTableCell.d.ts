import type { HTMLAttributes } from "react";
export declare function DataTableCell({ align, monospace, clickable, active, children, ...rest }: HTMLAttributes<HTMLDivElement> & {
    align?: "start" | "center" | "end";
    monospace?: boolean;
    clickable?: boolean;
    active?: boolean;
}): import("react/jsx-runtime").JSX.Element;
