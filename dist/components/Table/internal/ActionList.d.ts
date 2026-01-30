import type { ReactNode } from "react";
export declare function ActionListProvider({ onAfterSelect, children, }: {
    onAfterSelect?: () => void;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function ActionList({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function ActionListItem({ onSelect, children, className, }: {
    onSelect?: () => void;
    children: ReactNode;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
