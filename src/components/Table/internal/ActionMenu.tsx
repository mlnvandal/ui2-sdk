import type { KeyboardEventHandler, MouseEventHandler, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Popover } from "./Popover";
import styles from "../DataTable.module.css";

type ActionMenuHostProps = {
  onClick: MouseEventHandler;
  onKeyDown: KeyboardEventHandler;
  "aria-haspopup": boolean;
  "aria-expanded": boolean;
  ref: (node: HTMLElement | null) => void;
};

export function ActionMenu({
  open: openProp,
  onOpenChange,
  host,
  children,
  className,
  zIndex,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  host: (props: { open: boolean; hostProps: ActionMenuHostProps }) => ReactNode;
  children: ReactNode;
  className?: string;
  zIndex?: number;
}) {
  const [openState, setOpenState] = useState(false);
  const hostRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const open = openProp ?? openState;
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

  const setOpen = (next: boolean) => {
    if (onOpenChange) {
      onOpenChange(next);
    } else {
      setOpenState(next);
    }
  };

  useEffect(() => {
    if (open) {
      setAnchorRect(hostRef.current?.getBoundingClientRect() ?? null);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        hostRef.current?.focus();
      }
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (menuRef.current?.contains(target)) return;
      if (hostRef.current?.contains(target)) return;
      setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <>
      {host({
        open,
        hostProps: {
          onClick: (event) => {
            event.preventDefault();
            setOpen(!open);
          },
          onKeyDown: (event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              setOpen(true);
            }
          },
          "aria-haspopup": true,
          "aria-expanded": open,
          ref: (node) => {
            hostRef.current = node;
          },
        },
      })}
      <Popover open={open} anchorRect={anchorRect} placement="bottom-start" offset={6} zIndex={zIndex}>
        <div ref={menuRef} className={clsx(styles.actionMenu, className)}>
          {children}
        </div>
      </Popover>
    </>
  );
}
