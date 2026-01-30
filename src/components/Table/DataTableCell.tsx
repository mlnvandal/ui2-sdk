import type { HTMLAttributes, MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { IconCopy, IconFilterPlus } from "@tabler/icons-react";
import { ActionList, ActionListItem, ActionListProvider } from "./internal/ActionList";
import { Popover } from "./internal/Popover";
import { useDataTableCellContext, useDataTableContext } from "./DataTableContext";
import styles from "./DataTable.module.css";

export function DataTableCell({
  align,
  monospace,
  clickable = false,
  active = false,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement> & {
  align?: "start" | "center" | "end";
  monospace?: boolean;
  clickable?: boolean;
  active?: boolean;
}) {
  const cellContext = useDataTableCellContext();
  const tableContext = useDataTableContext();
  const cellRef = useRef<HTMLDivElement | null>(null);
  const [contextMenuOpen, setContextMenuOpen] = useState(false);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

  const resolvedAlign = align ?? cellContext.align;
  const resolvedMonospace = monospace ?? cellContext.monospace;
  const { value, rawValue, columnKey, filterKey, row, rowKey } = cellContext;

  const contextMenuKey = useMemo(() => {
    if (!columnKey) return null;
    const resolvedRowKey = rowKey ?? (row ? tableContext.getRowKey(row) : null);
    if (resolvedRowKey == null) return null;
    return `${resolvedRowKey}:${columnKey}`;
  }, [row, rowKey, columnKey, tableContext]);

  const resolvedFilterKey = useMemo(() => {
    if (filterKey) return filterKey;
    if (columnKey && tableContext.filterableColumnKeys.has(columnKey)) return columnKey;
    return null;
  }, [filterKey, columnKey, tableContext.filterableColumnKeys]);

  const hasMeaningfulValue = useMemo(() => {
    if (rawValue == null) {
      return Boolean(value && value.trim() && !["-", "—", "–"].includes(value.trim()));
    }
    if (typeof rawValue === "string") {
      const trimmed = rawValue.trim();
      return Boolean(trimmed && !["-", "—", "–"].includes(trimmed));
    }
    if (typeof rawValue === "number" || typeof rawValue === "boolean") {
      return true;
    }
    if (Array.isArray(rawValue)) {
      return rawValue.length > 0;
    }
    if (typeof rawValue === "object") {
      return Object.keys(rawValue).length > 0;
    }
    return false;
  }, [rawValue, value]);

  useEffect(() => {
    if (!contextMenuKey) return;
    setContextMenuOpen(tableContext.activeContextMenuKey === contextMenuKey);
  }, [contextMenuKey, tableContext.activeContextMenuKey]);

  useEffect(() => {
    if (!contextMenuOpen) return;
    const handleOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (cellRef.current?.contains(target)) return;
      closeMenu();
    };
    const handleScroll = () => closeMenu();
    window.addEventListener("mousedown", handleOutside, true);
    window.addEventListener("contextmenu", handleOutside, true);
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("mousedown", handleOutside, true);
      window.removeEventListener("contextmenu", handleOutside, true);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [contextMenuOpen]);

  const closeMenu = () => {
    if (contextMenuKey && tableContext.activeContextMenuKey === contextMenuKey) {
      tableContext.setActiveContextMenuKey(null);
    }
  };

  const onContextMenu = (event: ReactMouseEvent) => {
    event.preventDefault();
    if (!contextMenuKey || !hasMeaningfulValue) return;
    if (tableContext.activeContextMenuKey === contextMenuKey) {
      closeMenu();
      return;
    }
    const rect = (cellRef.current ?? event.currentTarget).getBoundingClientRect();
    setAnchorRect(rect);
    tableContext.setActiveContextMenuKey(contextMenuKey);
  };

  const copyToClipboard = async () => {
    const text = rawValue == null ? value : String(rawValue);
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    closeMenu();
  };

  const filterByValue = () => {
    if (!columnKey || !resolvedFilterKey) return;
    tableContext.filterByValue(columnKey, resolvedFilterKey, rawValue ?? value);
    closeMenu();
  };

  const outlineActive = active || contextMenuOpen;

  const isPinnedColumn = useMemo(() => {
    if (!columnKey) return false;
    return (
      tableContext.pinnedColumnsStartKeys.includes(columnKey) ||
      tableContext.pinnedColumnsEndKeys.includes(columnKey)
    );
  }, [columnKey, tableContext.pinnedColumnsStartKeys, tableContext.pinnedColumnsEndKeys]);

  return (
    <div
      ref={cellRef}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      data-align={resolvedAlign}
      data-monospace={resolvedMonospace ? "true" : "false"}
      data-clickable={clickable ? "true" : "false"}
      className={styles.cell}
      onContextMenu={onContextMenu}
      {...rest}
    >
      <span className={styles.cellContent} data-cell-content="true">
        {children}
      </span>
      <span className={styles.cellOutline} data-active={outlineActive ? "true" : "false"} />
      <Popover
        open={contextMenuOpen && hasMeaningfulValue}
        anchorRect={anchorRect}
        placement="bottom-start"
        zIndex={isPinnedColumn ? 220 : 140}
      >
        <div className={styles.actionMenu}>
          <ActionListProvider onAfterSelect={closeMenu}>
            <ActionList>
              {resolvedFilterKey ? (
                <ActionListItem onSelect={filterByValue}>
                  <IconFilterPlus size={16} />
                  Filter by value
                </ActionListItem>
              ) : null}
              <ActionListItem onSelect={copyToClipboard}>
                <IconCopy size={16} />
                Copy value
              </ActionListItem>
            </ActionList>
          </ActionListProvider>
        </div>
      </Popover>
    </div>
  );
}
