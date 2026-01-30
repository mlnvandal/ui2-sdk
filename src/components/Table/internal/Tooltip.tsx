import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Popover } from "./Popover";
import styles from "../DataTable.module.css";

export function Tooltip({
  content,
  children,
  delay = 200,
}: {
  content?: string;
  children: ReactNode;
  delay?: number;
}) {
  const [open, setOpen] = useState(false);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const timerRef = useRef<number | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const show = () => {
    if (!content) return;
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setAnchorRect(hostRef.current?.getBoundingClientRect() ?? null);
      setOpen(true);
    }, delay);
  };

  const hide = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    setOpen(false);
  };

  return (
    <div ref={hostRef} onMouseEnter={show} onMouseLeave={hide}>
      {children}
      <Popover open={open} anchorRect={anchorRect} placement="top-start" offset={6}>
        <div className={styles.tooltip}>{content}</div>
      </Popover>
    </div>
  );
}
