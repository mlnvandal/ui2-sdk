import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type PopoverPlacement = "bottom-start" | "bottom-end" | "top-start" | "top-end";

export function Popover({
  open,
  anchorRect,
  placement = "bottom-start",
  offset = 6,
  zIndex = 1000,
  children,
}: {
  open: boolean;
  anchorRect: DOMRect | null;
  placement?: PopoverPlacement;
  offset?: number;
  zIndex?: number;
  children: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !anchorRect || !mounted) {
    return null;
  }

  const style: CSSProperties = {
    position: "fixed",
    zIndex,
  };

  const left = placement.endsWith("end")
    ? anchorRect.right
    : anchorRect.left;
  const top = placement.startsWith("top")
    ? anchorRect.top
    : anchorRect.bottom;

  style.left = Math.round(left);
  style.top = Math.round(top + offset);

  if (placement.endsWith("end")) {
    style.transform = "translateX(-100%)";
  }

  if (placement.startsWith("top")) {
    style.transform = `${style.transform ?? ""} translateY(-100%)`;
  }

  return createPortal(<div style={style}>{children}</div>, document.body);
}
