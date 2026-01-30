import type {
  CSSProperties,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  ReactNode,
} from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconEyeOff,
  IconPinned,
  IconPinnedOff,
  IconSortAscending,
  IconSortDescending,
  IconFilterPlus,
} from "@tabler/icons-react";
import clsx from "clsx";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { ActionList, ActionListItem, ActionListProvider } from "./internal/ActionList";
import { ActionMenu } from "./internal/ActionMenu";
import { Tooltip } from "./internal/Tooltip";
import {
  DataTableCellContext,
  DataTableContext,
  DataTableSorting,
} from "./DataTableContext";
import { DataTableCell } from "./DataTableCell";
import styles from "./DataTable.module.css";

export type DataTableColumn<T> = {
  key: string;
  header: ReactNode;
  tooltip?: string;
  minWidth?: number;
  maxWidth?: number;
  align?: "start" | "end" | "center";
  monospace?: boolean;
  sortable?: boolean;
  resizable?: boolean;
  frozenStart?: boolean;
  frozenEnd?: boolean;
  filterKey?: string;
  value?: keyof T | ((row: T) => unknown);
  valueFormatter?: (value: unknown, row: T) => string | number;
  render?: (row: T) => ReactNode;
  sortFn?: (a: T, b: T, sortOrder: "asc" | "desc") => number;
};

export type DataTableProps<T> = {
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey?: keyof T | ((row: T) => string | number);
  size?: "m" | "l";
  rowHover?: boolean;
  rowDividers?: boolean;
  sorting?: DataTableSorting;
  defaultSorting?: DataTableSorting;
  onSortingChange?: (sorting: DataTableSorting) => void;
  columnWidths?: Record<string, number>;
  onColumnResize?: (payload: { key: string; width: number }) => void;
  columnsResizing?: boolean;
  columnsReordering?: boolean;
  columnsPinControl?: boolean;
  columnsVisibilityControl?: boolean;
  filterKeys?: string[];
  onFilterByColumn?: (payload: { columnKey: string; filterKey: string }) => void;
  onFilterByValue?: (payload: { columnKey: string; filterKey: string; value: unknown }) => void;
  visibleColumns?: string[];
  defaultVisibleColumns?: string[];
  onVisibleColumnsChange?: (keys: string[]) => void;
  columnsOrder?: string[];
  defaultColumnsOrder?: string[];
  onColumnsOrderChange?: (order: string[]) => void;
  pinnedColumnsStart?: string[];
  defaultPinnedColumnsStart?: string[];
  onPinnedColumnsStartChange?: (keys: string[]) => void;
  pinnedColumnsEnd?: string[];
  defaultPinnedColumnsEnd?: string[];
  onPinnedColumnsEndChange?: (keys: string[]) => void;
  className?: string;
  style?: CSSProperties;
};

const DEFAULT_COLUMN_WIDTH = 160;
const MIN_COLUMN_WIDTH = 40;
const MAX_COLUMN_WIDTH = 9999;

function clampWidth(width: number, min = MIN_COLUMN_WIDTH, max = MAX_COLUMN_WIDTH) {
  return Math.min(Math.max(width, min), max);
}

function sortByOrder<T extends { key: string }>(columns: T[], order: string[]) {
  if (!order.length) return columns;
  const orderMap = new Map(order.map((key, index) => [key, index]));
  return [...columns].sort((a, b) => {
    const aIndex = orderMap.get(a.key);
    const bIndex = orderMap.get(b.key);
    if (aIndex === undefined && bIndex === undefined) return 0;
    if (aIndex === undefined) return 1;
    if (bIndex === undefined) return -1;
    return aIndex - bIndex;
  });
}

function resolveRowKey<T>(row: T, rowKey?: keyof T | ((row: T) => string | number)) {
  if (!rowKey) {
    const candidate = (row as unknown as { id?: string | number }).id;
    return candidate == null || candidate === "" ? undefined : candidate;
  }
  if (typeof rowKey === "function") return rowKey(row);
  return (row as Record<string, unknown>)[rowKey as string] as string | number;
}

function getColumnValue<T>(row: T, column: DataTableColumn<T>) {
  if (typeof column.value === "function") {
    return column.value(row);
  }
  if (typeof column.value === "string") {
    return (row as Record<string, unknown>)[column.value as string] as unknown;
  }
  return (row as Record<string, unknown>)[column.key as string] as unknown;
}

export function DataTable<T>({
  columns,
  rows,
  rowKey,
  size = "l",
  rowHover = true,
  rowDividers = true,
  sorting,
  defaultSorting = { sortBy: null, sortOrder: "asc" },
  onSortingChange,
  columnWidths: columnWidthsProp,
  onColumnResize,
  columnsResizing = true,
  columnsReordering = true,
  columnsPinControl = true,
  columnsVisibilityControl = true,
  filterKeys,
  onFilterByColumn,
  onFilterByValue,
  visibleColumns,
  defaultVisibleColumns,
  onVisibleColumnsChange,
  columnsOrder,
  defaultColumnsOrder,
  onColumnsOrderChange,
  pinnedColumnsStart,
  defaultPinnedColumnsStart,
  onPinnedColumnsStartChange,
  pinnedColumnsEnd,
  defaultPinnedColumnsEnd,
  onPinnedColumnsEndChange,
  className,
  style,
}: DataTableProps<T>) {
  const [sortingState, setSortingState] = useState<DataTableSorting>(defaultSorting);
  const [columnWidthsState, setColumnWidthsState] = useState<Record<string, number>>({});
  const [columnsOrderState, setColumnsOrderState] = useState<string[]>(defaultColumnsOrder ?? []);
  const [visibleColumnsState, setVisibleColumnsState] = useState<string[] | undefined>(
    defaultVisibleColumns,
  );
  const [pinnedStartState, setPinnedStartState] = useState<string[]>(defaultPinnedColumnsStart ?? []);
  const [pinnedEndState, setPinnedEndState] = useState<string[]>(defaultPinnedColumnsEnd ?? []);
  const [activeContextMenuKey, setActiveContextMenuKey] = useState<string | null>(null);

  const tableRef = useRef<HTMLDivElement | null>(null);
  const headRowRef = useRef<HTMLDivElement | null>(null);
  const ghostRef = useRef<HTMLDivElement | null>(null);
  const resizingRef = useRef<{ key: string; startX: number; startWidth: number } | null>(null);
  const columnWidthsUpdateRef = useRef<Record<string, number>>({});
  const lastResizedKeyRef = useRef<string | null>(null);
  const lastAutoFitKeyRef = useRef<string | null>(null);
  const pinnedStartWidthsRef = useRef<number[]>([]);
  const regularWidthsRef = useRef<number[]>([]);
  const pinnedEndWidthsRef = useRef<number[]>([]);
  const pinnedStartWidthRef = useRef(0);
  const regularWidthRef = useRef(0);
  const pinnedEndWidthRef = useRef(0);

  const [dragging, setDragging] = useState(false);
  const [draggedColumnKey, setDraggedColumnKey] = useState<string | null>(null);
  const [targetColumnKey, setTargetColumnKey] = useState<string | null>(null);
  const [draggedColumnIndex, setDraggedColumnIndex] = useState(-1);
  const [targetColumnIndex, setTargetColumnIndex] = useState(-1);

  const resolvedSorting = sorting ?? sortingState;
  const resolvedVisibleColumns = visibleColumns ?? visibleColumnsState;
  const resolvedColumnsOrder = columnsOrder ?? columnsOrderState;
  const resolvedPinnedStart = pinnedColumnsStart ?? pinnedStartState;
  const resolvedPinnedEnd = pinnedColumnsEnd ?? pinnedEndState;

  const filterableColumnKeys = useMemo(() => new Set(filterKeys ?? []), [filterKeys]);

  const setSorting = (next: DataTableSorting) => {
    if (onSortingChange) {
      onSortingChange(next);
    } else {
      setSortingState(next);
    }
  };

  const setVisibleColumns = (next: string[]) => {
    if (onVisibleColumnsChange) {
      onVisibleColumnsChange(next);
    } else {
      setVisibleColumnsState(next);
    }
  };

  const setPinnedStart = (next: string[]) => {
    if (onPinnedColumnsStartChange) {
      onPinnedColumnsStartChange(next);
    } else {
      setPinnedStartState(next);
    }
  };

  const setPinnedEnd = (next: string[]) => {
    if (onPinnedColumnsEndChange) {
      onPinnedColumnsEndChange(next);
    } else {
      setPinnedEndState(next);
    }
  };

  const setColumnsOrder = (next: string[]) => {
    if (onColumnsOrderChange) {
      onColumnsOrderChange(next);
    } else {
      setColumnsOrderState(next);
    }
  };

  const hideColumn = (key: string) => {
    const base = resolvedVisibleColumns ?? columns.map((column) => column.key);
    setVisibleColumns(base.filter((item) => item !== key));
  };

  const orderedColumns = useMemo(() => {
    return resolvedColumnsOrder.length ? sortByOrder(columns, resolvedColumnsOrder) : [...columns];
  }, [columns, resolvedColumnsOrder]);

  const visibleColumnsResolved = useMemo(() => {
    if (!Array.isArray(resolvedVisibleColumns)) return orderedColumns;
    return orderedColumns.filter(
      ({ key, frozenStart, frozenEnd }) =>
        frozenStart || frozenEnd || resolvedVisibleColumns.includes(key),
    );
  }, [orderedColumns, resolvedVisibleColumns]);

  const pinnedStartColumns = useMemo(
    () =>
      visibleColumnsResolved.filter(
        ({ key, frozenStart }) => frozenStart || resolvedPinnedStart.includes(key),
      ),
    [visibleColumnsResolved, resolvedPinnedStart],
  );

  const pinnedEndColumns = useMemo(
    () =>
      visibleColumnsResolved.filter(
        ({ key, frozenStart, frozenEnd }) =>
          !frozenStart &&
          !resolvedPinnedStart.includes(key) &&
          (frozenEnd || resolvedPinnedEnd.includes(key)),
      ),
    [visibleColumnsResolved, resolvedPinnedStart, resolvedPinnedEnd],
  );

  const regularColumns = useMemo(
    () =>
      visibleColumnsResolved.filter(
        ({ key, frozenStart, frozenEnd }) =>
          !frozenStart &&
          !frozenEnd &&
          !resolvedPinnedStart.includes(key) &&
          !resolvedPinnedEnd.includes(key),
      ),
    [visibleColumnsResolved, resolvedPinnedStart, resolvedPinnedEnd],
  );

  useEffect(() => {
    setColumnWidthsState((prev) => {
      const next = { ...prev };
      columns.forEach((column) => {
        const resolved = columnWidthsProp?.[column.key] ?? prev[column.key] ?? DEFAULT_COLUMN_WIDTH;
        next[column.key] = clampWidth(
          resolved,
          column.minWidth ?? MIN_COLUMN_WIDTH,
          column.maxWidth ?? MAX_COLUMN_WIDTH,
        );
      });
      return next;
    });
  }, [columns, columnWidthsProp]);

  const columnWidths = useMemo(() => {
    return columns.reduce<Record<string, number>>((acc, column) => {
      acc[column.key] = clampWidth(
        columnWidthsProp?.[column.key] ?? columnWidthsState[column.key] ?? DEFAULT_COLUMN_WIDTH,
        column.minWidth ?? MIN_COLUMN_WIDTH,
        column.maxWidth ?? MAX_COLUMN_WIDTH,
      );
      return acc;
    }, {});
  }, [columns, columnWidthsProp, columnWidthsState]);

  const applyColumnStyles = () => {
    if (!tableRef.current) return;
    const allColumns = [...pinnedStartColumns, ...regularColumns, ...pinnedEndColumns];
    const preferSecond =
      allColumns.length > 1 && lastResizedKeyRef.current === allColumns[0]?.key;
    let targetIndex = preferSecond ? 1 : 0;
    if (
      allColumns.length > 1 &&
      lastAutoFitKeyRef.current &&
      allColumns[targetIndex]?.key === lastAutoFitKeyRef.current
    ) {
      targetIndex = targetIndex === 0 ? 1 : 0;
    }
    const targetKey = allColumns[targetIndex]?.key;
    const pinnedStartWidths = pinnedStartColumns.map(
      (column) => columnWidthsUpdateRef.current[column.key] ?? columnWidths[column.key],
    );
    const pinnedEndWidths = pinnedEndColumns.map(
      (column) => columnWidthsUpdateRef.current[column.key] ?? columnWidths[column.key],
    );
    const regularWidths = regularColumns.map(
      (column) => columnWidthsUpdateRef.current[column.key] ?? columnWidths[column.key],
    );

    let pinnedStartWidth = pinnedStartWidths.reduce((acc, val) => acc + val, 0);
    let pinnedEndWidth = pinnedEndWidths.reduce((acc, val) => acc + val, 0);
    let regularWidth = regularWidths.reduce((acc, val) => acc + val, 0);
    let totalWidth = pinnedStartWidth + regularWidth + pinnedEndWidth;
    const availableWidth = tableRef.current.clientWidth;

    if (availableWidth > totalWidth) {
      totalWidth = availableWidth;
    }

    const gridPinnedStart = pinnedStartWidths.map((value) => `${value}px`).join(" ");
    const gridPinnedEnd = pinnedEndWidths.map((value) => `${value}px`).join(" ");
    const gridRegular = regularWidths.map((value) => `${value}px`).join(" ");

    pinnedStartWidthsRef.current = pinnedStartWidths;
    regularWidthsRef.current = regularWidths;
    pinnedEndWidthsRef.current = pinnedEndWidths;
    pinnedStartWidthRef.current = pinnedStartWidth;
    regularWidthRef.current = regularWidth;
    pinnedEndWidthRef.current = pinnedEndWidth;

    tableRef.current.style.setProperty(
      "--ui2-table-row-template",
      `${pinnedStartWidth}px ${regularWidth}px ${pinnedEndWidth}px`,
    );
    tableRef.current.style.setProperty("--ui2-table-grid-pinned-start", gridPinnedStart);
    tableRef.current.style.setProperty("--ui2-table-grid-regular", gridRegular);
    tableRef.current.style.setProperty("--ui2-table-grid-pinned-end", gridPinnedEnd);
    tableRef.current.style.setProperty("--ui2-table-width-pinned-start", `${pinnedStartWidth}px`);
    tableRef.current.style.setProperty("--ui2-table-width-regular", `${regularWidth}px`);
    tableRef.current.style.setProperty("--ui2-table-width-pinned-end", `${pinnedEndWidth}px`);
    tableRef.current.style.setProperty("--ui2-table-total-width", `${totalWidth}px`);
  };


  useEffect(() => {
    applyColumnStyles();
  }, [columnWidths, pinnedStartColumns, pinnedEndColumns, regularColumns]);

  useEffect(() => {
    if (!tableRef.current) return;
    const element = tableRef.current;
    const resize = () => applyColumnStyles();
    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(resize);
      observer.observe(element);
      return () => observer.disconnect();
    }
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [tableRef, columnWidths, pinnedStartColumns, pinnedEndColumns, regularColumns]);

  const fixWidth = (key: string, width: number) => {
    const column = columns.find((item) => item.key === key);
    return clampWidth(
      width,
      column?.minWidth ?? MIN_COLUMN_WIDTH,
      column?.maxWidth ?? MAX_COLUMN_WIDTH,
    );
  };

  const getMaxContentWidth = (element: HTMLElement) => {
    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.width = "max-content";
    clone.style.maxWidth = "none";
    clone.style.display = "inline-flex";
    clone.style.whiteSpace = "nowrap";
    clone.style.visibility = "hidden";
    clone.style.position = "absolute";
    clone.style.left = "-9999px";
    document.body.appendChild(clone);
    const { width } = clone.getBoundingClientRect();
    document.body.removeChild(clone);
    const resolved = width > 0 ? width : element.scrollWidth;
    return Math.ceil(resolved);
  };

  const getHorizontalPadding = (element: HTMLElement) => {
    const styles = window.getComputedStyle(element);
    const left = Number.parseFloat(styles.paddingLeft || "0");
    const right = Number.parseFloat(styles.paddingRight || "0");
    return left + right;
  };

  const getContentWidth = (key: string) => {
    if (!tableRef.current) return;
    let newWidth = 0;
    const cells = Array.from(tableRef.current.querySelectorAll<HTMLElement>(`[data-column="${key}"]`));
    cells.forEach((cell) => {
      const content = cell.querySelector<HTMLElement>("[data-cell-content]") ?? cell;
      const width = getMaxContentWidth(content) + getHorizontalPadding(cell);
      if (width > newWidth) newWidth = width;
    });
    if (newWidth <= 0) return;
    return fixWidth(key, newWidth);
  };

  const applyResolvedWidth = (key: string, resolvedWidth: number) => {
    columnWidthsUpdateRef.current[key] = resolvedWidth;
    lastAutoFitKeyRef.current = key;
    applyColumnStyles();
    setColumnWidthsState((prev) => ({ ...prev, [key]: resolvedWidth }));
    onColumnResize?.({ key, width: resolvedWidth });
    window.setTimeout(() => {
      if (columnWidthsUpdateRef.current[key] === resolvedWidth) {
        delete columnWidthsUpdateRef.current[key];
      }
      if (lastAutoFitKeyRef.current === key) {
        lastAutoFitKeyRef.current = null;
      }
    }, 0);
  };

  const getTotalWidth = () => {
    return (
      pinnedStartColumns.reduce((acc, column) => acc + columnWidths[column.key], 0) +
      regularColumns.reduce((acc, column) => acc + columnWidths[column.key], 0) +
      pinnedEndColumns.reduce((acc, column) => acc + columnWidths[column.key], 0)
    );
  };

  const autoAdjustColumnWidth = (key: string) => {
    const resolvedWidth = getContentWidth(key);
    if (!resolvedWidth) return;
    applyResolvedWidth(key, resolvedWidth);
  };

  const toggleAutoFitColumn = (key: string) => {
    if (!tableRef.current) return;
    const resolvedContentWidth = getContentWidth(key);
    if (!resolvedContentWidth) return;
    const column = columns.find((item) => item.key === key);
    const currentWidth = columnWidths[key];
    const minWidth = column?.minWidth ?? MIN_COLUMN_WIDTH;
    const totalWidth = getTotalWidth();
    const containerWidth = tableRef.current.clientWidth;
    const remaining = Math.max(0, containerWidth - totalWidth);
    const threshold = 4;
    const expandThreshold = 12;
    if (currentWidth > resolvedContentWidth + threshold) {
      applyResolvedWidth(key, Math.max(resolvedContentWidth, minWidth));
      return;
    }
    if (remaining >= expandThreshold && Math.abs(currentWidth - resolvedContentWidth) <= threshold) {
      const expandWidth = fixWidth(key, currentWidth + remaining);
      if (expandWidth <= currentWidth + 1) {
        applyResolvedWidth(key, Math.max(resolvedContentWidth, minWidth));
        return;
      }
      applyResolvedWidth(key, expandWidth);
      return;
    }
    applyResolvedWidth(key, Math.max(resolvedContentWidth, minWidth));
  };
  const onResizeHandlePointerDown = (event: ReactPointerEvent, key: string) => {
    if (!columnsResizing) return;
    if (event.button !== 0 && event.pointerType !== "touch") return;
    event.preventDefault();
    event.stopPropagation();
    const handle = event.currentTarget as HTMLElement;
    if (handle.setPointerCapture) {
      handle.setPointerCapture(event.pointerId);
    }
    lastResizedKeyRef.current = key;
    const startX = event.clientX;
    const startWidth = columnWidths[key];
    resizingRef.current = { key, startX, startWidth };
  };

  const onResizeHandlePointerMove = (event: ReactPointerEvent, key: string) => {
    if (!resizingRef.current || resizingRef.current.key !== key) return;
    event.preventDefault();
    event.stopPropagation();
    const nextWidth = fixWidth(key, resizingRef.current.startWidth + (event.clientX - resizingRef.current.startX));
    columnWidthsUpdateRef.current[key] = nextWidth;
    applyColumnStyles();
  };

  const onResizeHandlePointerUp = (event: ReactPointerEvent, key: string) => {
    if (!resizingRef.current || resizingRef.current.key !== key) return;
    event.preventDefault();
    event.stopPropagation();
    const nextWidth = columnWidthsUpdateRef.current[key];
    if (nextWidth) {
      setColumnWidthsState((prev) => ({ ...prev, [key]: nextWidth }));
      onColumnResize?.({ key, width: nextWidth });
    }
    columnWidthsUpdateRef.current = {};
    resizingRef.current = null;
    const handle = event.currentTarget as HTMLElement;
    if (handle.releasePointerCapture) {
      handle.releasePointerCapture(event.pointerId);
    }
  };

  const onResizeHandleDoubleClick = (event: ReactMouseEvent, key: string) => {
    event.preventDefault();
    event.stopPropagation();
    lastResizedKeyRef.current = key;
    lastAutoFitKeyRef.current = key;
    toggleAutoFitColumn(key);
  };

  const calculateOffsetsFromWidth = (widths: number[]) => {
    let sum = 0;
    return widths.map((width) => {
      const prevSum = sum;
      sum += width;
      return prevSum;
    });
  };

  const startDragging = (event: MouseEvent, key: string) => {
    if (!columnsReordering) return;
    const startX = event.clientX;
    const dragThreshold = 5;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (Math.abs(startX - moveEvent.clientX) < dragThreshold) return;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      setDragging(true);
      setDraggedColumnKey(key);

      const order = orderedColumns.map((column) => column.key);
      setDraggedColumnIndex(order.indexOf(key));

      const pinnedStartWidths = pinnedStartColumns.map((column) => columnWidths[column.key]);
      const regularWidths = regularColumns.map((column) => columnWidths[column.key]);
      const pinnedOffsets = calculateOffsetsFromWidth(pinnedStartWidths);
      const regularOffsets = calculateOffsetsFromWidth(regularWidths);

      const headFirst = headRowRef.current?.querySelector<HTMLElement>("[data-column]");
      const columnsOffset = headFirst ? headFirst.offsetLeft : 0;

      const onDragMove = (dragEvent: MouseEvent) => {
        if (!tableRef.current) return;
        const { left, right } = tableRef.current.getBoundingClientRect();
        const { scrollLeft } = tableRef.current;

        const ghostLeft = dragEvent.clientX - left + scrollLeft;
        if (ghostRef.current) {
          ghostRef.current.style.transform = `translateX(${ghostLeft}px)`;
        }

        let x = dragEvent.clientX - left - columnsOffset;
        if (x < 0) return;

        if (x <= pinnedStartWidths.reduce((acc, val) => acc + val, 0)) {
          const index = pinnedOffsets.findIndex((offset, i) =>
            x >= offset && x < (pinnedOffsets[i + 1] ?? Infinity),
          );
          const column = pinnedStartColumns[index];
          setTargetColumnKey(column?.key ?? null);
          setTargetColumnIndex(order.indexOf(column?.key ?? ""));
          return;
        }

        x = x + scrollLeft;
        const index = regularOffsets.findIndex((offset, i) =>
          x >= offset && x < (regularOffsets[i + 1] ?? Infinity),
        );
        const column = regularColumns[index];
        setTargetColumnKey(column?.key ?? null);
        setTargetColumnIndex(order.indexOf(column?.key ?? ""));

        const edgeThreshold = 100;
        if (dragEvent.clientX < left + edgeThreshold) {
          tableRef.current.scrollLeft = Math.max(0, tableRef.current.scrollLeft - 15);
        } else if (dragEvent.clientX > right - edgeThreshold) {
          tableRef.current.scrollLeft = Math.min(
            tableRef.current.scrollWidth - tableRef.current.clientWidth,
            tableRef.current.scrollLeft + 15,
          );
        }
      };

      const onDragEnd = () => {
        if (targetColumnKey && draggedColumnKey && draggedColumnKey !== targetColumnKey) {
          const next = [...order];
          const from = next.indexOf(draggedColumnKey);
          const to = next.indexOf(targetColumnKey);
          next.splice(from, 1);
          next.splice(to, 0, draggedColumnKey);
          setColumnsOrder(next);

          const draggedPinned = resolvedPinnedStart.includes(draggedColumnKey);
          const targetPinned = resolvedPinnedStart.includes(targetColumnKey);
          if (draggedPinned && !targetPinned) {
            setPinnedStart(resolvedPinnedStart.filter((item) => item !== draggedColumnKey));
          } else if (!draggedPinned && targetPinned) {
            setPinnedStart([...resolvedPinnedStart, draggedColumnKey]);
          }
        }
        setDragging(false);
        setDraggedColumnKey(null);
        setTargetColumnKey(null);
        setTargetColumnIndex(-1);
        window.removeEventListener("mousemove", onDragMove);
        window.removeEventListener("mouseup", onDragEnd);
      };

      window.addEventListener("mousemove", onDragMove);
      window.addEventListener("mouseup", onDragEnd);
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const pinColumn = (key: string) => {
    if (resolvedPinnedStart.includes(key)) return;
    setPinnedStart([...resolvedPinnedStart, key]);
  };

  const unpinColumn = (key: string) => {
    setPinnedStart(resolvedPinnedStart.filter((item) => item !== key));
  };

  const filterByColumn = (columnKey: string, filterKey?: string) => {
    const resolvedKey = filterKey ?? (filterableColumnKeys.has(columnKey) ? columnKey : null);
    if (!resolvedKey) return;
    onFilterByColumn?.({ columnKey, filterKey: resolvedKey });
  };

  const filterByValue = (columnKey: string, filterKey: string | undefined, value: unknown) => {
    const resolvedKey = filterKey ?? (filterableColumnKeys.has(columnKey) ? columnKey : null);
    if (!resolvedKey) return;
    onFilterByValue?.({ columnKey, filterKey: resolvedKey, value });
  };

  const rowsSorted = useMemo(() => {
    if (!resolvedSorting.sortBy) return rows;
    const column = columns.find((item) => item.key === resolvedSorting.sortBy);
    if (!column) return rows;
    const sorted = [...rows];
    sorted.sort((a, b) => {
      if (column.sortFn) return column.sortFn(a, b, resolvedSorting.sortOrder);
      const aValue = getColumnValue(a, column);
      const bValue = getColumnValue(b, column);
      if (typeof aValue === "string" && typeof bValue === "string") {
        return resolvedSorting.sortOrder === "desc"
          ? bValue.localeCompare(aValue)
          : aValue.localeCompare(bValue);
      }
      if (typeof aValue === "number" && typeof bValue === "number") {
        return resolvedSorting.sortOrder === "desc" ? bValue - aValue : aValue - bValue;
      }
      return 0;
    });
    return sorted;
  }, [rows, columns, resolvedSorting]);

  const contextValue = useMemo(
    () => ({
      sorting: resolvedSorting,
      setSorting,
      pinnedColumnsStartKeys: resolvedPinnedStart,
      pinnedColumnsEndKeys: resolvedPinnedEnd,
      pinColumn,
      unpinColumn,
      hideColumn,
      columnsReordering,
      columnsPinControl,
      columnsVisibilityControl,
      startDragging,
      draggedColumnKey,
      targetColumnKey,
      draggedColumnIndex,
      targetColumnIndex,
      filterableColumnKeys,
      filterByColumn,
      filterByValue,
      activeContextMenuKey,
      setActiveContextMenuKey,
      getRowKey: (row: unknown) => resolveRowKey(row as T, rowKey) ?? "",
    }),
    [
      resolvedSorting,
      resolvedPinnedStart,
      resolvedPinnedEnd,
      columnsReordering,
      columnsPinControl,
      columnsVisibilityControl,
      draggedColumnKey,
      targetColumnKey,
      draggedColumnIndex,
      targetColumnIndex,
      filterableColumnKeys,
      activeContextMenuKey,
      rowKey,
    ],
  );

  return (
    <DataTableContext.Provider value={contextValue}>
      <div className={clsx(styles.frame, className)} data-ui2-component="DataTable" style={style}>
        <div className={styles.scroll} ref={tableRef}>
          <div className={styles.table} data-size={size}>
            <div className={styles.tableInner}>
              <div className={styles.tableHead} role="rowgroup">
                <div className={styles.headRow} role="row" ref={headRowRef}>
                  {pinnedStartColumns.length ? (
                    <div className={clsx(styles.columnGroup, styles.columnsPinnedStart)} data-group="pinned-start">
                      {pinnedStartColumns.map((column) => (
                        <HeadCell
                          key={column.key}
                          column={column}
                          sorting={resolvedSorting}
                          onSortingChange={setSorting}
                          onPin={() => pinColumn(column.key)}
                          onUnpin={() => unpinColumn(column.key)}
                          onHide={() => hideColumn(column.key)}
                          onFilter={() => filterByColumn(column.key, column.filterKey)}
                          onStartDragging={startDragging}
                          onResizeStart={onResizeHandlePointerDown}
                          onResizeMove={onResizeHandlePointerMove}
                          onResizeEnd={onResizeHandlePointerUp}
                          onResizeDoubleClick={onResizeHandleDoubleClick}
                          canResize={columnsResizing}
                          canPin={columnsPinControl}
                          pinned={resolvedPinnedStart.includes(column.key)}
                          canHide={columnsVisibilityControl}
                          canReorder={columnsReordering}
                          canFilter={
                            Boolean(column.filterKey) || filterableColumnKeys.has(column.key)
                          }
                          dragState={{
                            draggedColumnKey,
                            targetColumnKey,
                            draggedColumnIndex,
                            targetColumnIndex,
                          }}
                        />
                      ))}
                    </div>
                  ) : null}
                  <div className={clsx(styles.columnGroup, styles.columnsRegular)} data-group="regular">
                    {regularColumns.map((column) => (
                      <HeadCell
                        key={column.key}
                        column={column}
                        sorting={resolvedSorting}
                        onSortingChange={setSorting}
                        onPin={() => pinColumn(column.key)}
                        onUnpin={() => unpinColumn(column.key)}
                        onHide={() => hideColumn(column.key)}
                        onFilter={() => filterByColumn(column.key, column.filterKey)}
                        onStartDragging={startDragging}
                        onResizeStart={onResizeHandlePointerDown}
                        onResizeMove={onResizeHandlePointerMove}
                        onResizeEnd={onResizeHandlePointerUp}
                        onResizeDoubleClick={onResizeHandleDoubleClick}
                        canResize={columnsResizing}
                        canPin={columnsPinControl}
                        pinned={resolvedPinnedStart.includes(column.key)}
                        canHide={columnsVisibilityControl}
                        canReorder={columnsReordering}
                        canFilter={
                          Boolean(column.filterKey) || filterableColumnKeys.has(column.key)
                        }
                        dragState={{
                          draggedColumnKey,
                          targetColumnKey,
                          draggedColumnIndex,
                          targetColumnIndex,
                        }}
                      />
                    ))}
                  </div>
                  {pinnedEndColumns.length ? (
                    <div className={clsx(styles.columnGroup, styles.columnsPinnedEnd)} data-group="pinned-end">
                      {pinnedEndColumns.map((column) => (
                      <HeadCell
                        key={column.key}
                        column={column}
                        sorting={resolvedSorting}
                        onSortingChange={setSorting}
                        onPin={() => pinColumn(column.key)}
                        onUnpin={() => unpinColumn(column.key)}
                        onHide={() => hideColumn(column.key)}
                        onFilter={() => filterByColumn(column.key, column.filterKey)}
                        onStartDragging={startDragging}
                        onResizeStart={onResizeHandlePointerDown}
                        onResizeMove={onResizeHandlePointerMove}
                        onResizeEnd={onResizeHandlePointerUp}
                        onResizeDoubleClick={onResizeHandleDoubleClick}
                        canResize={columnsResizing}
                        canPin={false}
                        pinned={false}
                        canHide={columnsVisibilityControl}
                        canReorder={columnsReordering}
                        canFilter={
                          Boolean(column.filterKey) || filterableColumnKeys.has(column.key)
                        }
                          dragState={{
                            draggedColumnKey,
                            targetColumnKey,
                            draggedColumnIndex,
                            targetColumnIndex,
                          }}
                        />
                      ))}
                    </div>
                  ) : null}
                  {dragging ? (
                    <div className={styles.ghost} ref={ghostRef}>
                      <div className={styles.ghostInner}>
                        {orderedColumns.find((column) => column.key === draggedColumnKey)?.header}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className={styles.tableBody} role="rowgroup">
                {rowsSorted.map((row, rowIndex) => (
                  <TableRow
                    key={resolveRowKey(row, rowKey) ?? rowIndex}
                    hover={rowHover}
                    divider={rowDividers}
                  >
                    {pinnedStartColumns.length ? (
                      <div className={clsx(styles.columnGroup, styles.columnsPinnedStart)} data-group="pinned-start">
                    {pinnedStartColumns.map((column) => (
                      <BodyCell
                        key={column.key}
                        column={column}
                        row={row}
                        rowKeyValue={resolveRowKey(row, rowKey) ?? rowIndex}
                      />
                    ))}
                      </div>
                    ) : null}
                    <div className={clsx(styles.columnGroup, styles.columnsRegular)} data-group="regular">
                      {regularColumns.map((column) => (
                        <BodyCell
                          key={column.key}
                          column={column}
                          row={row}
                          rowKeyValue={resolveRowKey(row, rowKey) ?? rowIndex}
                        />
                      ))}
                    </div>
                    {pinnedEndColumns.length ? (
                      <div className={clsx(styles.columnGroup, styles.columnsPinnedEnd)} data-group="pinned-end">
                        {pinnedEndColumns.map((column) => (
                          <BodyCell
                            key={column.key}
                            column={column}
                            row={row}
                            rowKeyValue={resolveRowKey(row, rowKey) ?? rowIndex}
                          />
                        ))}
                      </div>
                    ) : null}
                  </TableRow>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DataTableContext.Provider>
  );
}

function TableRow({
  children,
  hover,
  divider,
}: {
  children: ReactNode;
  hover: boolean;
  divider: boolean;
}) {
  return (
    <div className={styles.row} data-hover={hover ? "true" : "false"} data-divider={divider ? "true" : "false"}>
      {children}
    </div>
  );
}

function HeadCell<T>({
  column,
  sorting,
  onSortingChange,
  onPin,
  onUnpin,
  onHide,
  onFilter,
  onStartDragging,
  onResizeStart,
  onResizeMove,
  onResizeEnd,
  onResizeDoubleClick,
  canResize,
  canPin,
  canHide,
  canReorder,
  canFilter,
  pinned,
  dragState,
}: {
  column: DataTableColumn<T>;
  sorting: DataTableSorting;
  onSortingChange: (sorting: DataTableSorting) => void;
  onPin: () => void;
  onUnpin: () => void;
  onHide: () => void;
  onFilter: () => void;
  onStartDragging: (event: MouseEvent, key: string) => void;
  onResizeStart: (event: ReactPointerEvent, key: string) => void;
  onResizeMove: (event: ReactPointerEvent, key: string) => void;
  onResizeEnd: (event: ReactPointerEvent, key: string) => void;
  onResizeDoubleClick: (event: ReactMouseEvent, key: string) => void;
  canResize: boolean;
  canPin: boolean;
  canHide: boolean;
  canReorder: boolean;
  canFilter: boolean;
  pinned: boolean;
  dragState: {
    draggedColumnKey: string | null;
    targetColumnKey: string | null;
    draggedColumnIndex: number;
    targetColumnIndex: number;
  };
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const sortingActive = sorting.sortBy === column.key;
  const isResizable = canResize && (column.resizable ?? true);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", closeOnScroll, true);
    return () => window.removeEventListener("scroll", closeOnScroll, true);
  }, [menuOpen]);

  const toggleSorting = () => {
    if (!column.sortable) return;
    if (sorting.sortBy !== column.key) {
      onSortingChange({ sortBy: column.key, sortOrder: "asc" });
      return;
    }
    if (sorting.sortOrder === "desc") {
      onSortingChange({ sortBy: null, sortOrder: "asc" });
      return;
    }
    onSortingChange({ sortBy: column.key, sortOrder: "desc" });
  };

  const dropIndicatorVisible =
    column.key === dragState.targetColumnKey && column.key !== dragState.draggedColumnKey;
  const dropIndicatorStart =
    dragState.draggedColumnIndex > dragState.targetColumnIndex && dropIndicatorVisible;

  return (
    <Tooltip content={column.tooltip}>
      <div
        className={styles.headCell}
        data-align={column.align ?? "start"}
        data-open={menuOpen ? "true" : "false"}
        data-column={column.key}
        onMouseDown={(event) => {
          if ((event.target as HTMLElement | null)?.closest?.("[data-resize-hotspot]")) return;
          if (!canReorder || column.frozenStart || column.frozenEnd) return;
          onStartDragging(event.nativeEvent, column.key);
        }}
      >
        <div className={styles.headContent}>
          <span className={styles.headLabel} data-cell-content="true">
            {column.header}
          </span>
        </div>
        <ActionMenu
          open={menuOpen}
          onOpenChange={setMenuOpen}
          host={({ hostProps }) => (
            <button {...hostProps} className={styles.headButton} aria-label="Column menu" />
          )}
          zIndex={pinned ? 220 : 140}
        >
          <ActionListProvider onAfterSelect={() => setMenuOpen(false)}>
            <ActionList>
              {canPin && !column.frozenStart && !column.frozenEnd ? (
                pinned ? (
                  <ActionListItem onSelect={onUnpin}>
                    <IconPinnedOff size={16} /> Unpin column
                  </ActionListItem>
                ) : (
                  <ActionListItem onSelect={onPin}>
                    <IconPinned size={16} /> Pin column
                  </ActionListItem>
                )
              ) : null}
              {canHide ? (
                <ActionListItem onSelect={onHide}>
                  <IconEyeOff size={16} /> Hide column
                </ActionListItem>
              ) : null}
              {canFilter ? (
                <ActionListItem onSelect={onFilter}>
                  <IconFilterPlus size={16} /> Filter by column
                </ActionListItem>
              ) : null}
            </ActionList>
          </ActionListProvider>
        </ActionMenu>
        {column.sortable ? (
          <ButtonIcon
            size="xs"
            variant="tertiary"
            className={styles.sortButton}
            active={sortingActive}
            textColor="--ui2-content-secondary"
            aria-label={`Sort ${typeof column.header === "string" ? column.header : column.key}`}
            onClick={(event) => {
              event.stopPropagation();
              toggleSorting();
            }}
          >
            {sortingActive ? (
              sorting.sortOrder === "desc" ? (
                <IconChevronDown size={14} />
              ) : (
                <IconChevronUp size={14} />
              )
            ) : (
              <IconChevronDown size={14} />
            )}
          </ButtonIcon>
        ) : null}
        {isResizable ? (
          <span
            className={styles.resizeHotspot}
            data-resize-hotspot="true"
            onPointerDown={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onResizeStart(event as unknown as ReactPointerEvent, column.key);
            }}
            onPointerMove={(event) => {
              onResizeMove(event as unknown as ReactPointerEvent, column.key);
            }}
            onPointerUp={(event) => {
              onResizeEnd(event as unknown as ReactPointerEvent, column.key);
            }}
            onPointerCancel={(event) => {
              onResizeEnd(event as unknown as ReactPointerEvent, column.key);
            }}
            onDoubleClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onResizeDoubleClick(event as unknown as ReactMouseEvent, column.key);
            }}
          />
        ) : null}
        {dropIndicatorVisible ? (
          <div className={clsx(styles.dropIndicator, dropIndicatorStart && styles.dropIndicatorStart)} />
        ) : null}
      </div>
    </Tooltip>
  );
}

function BodyCell<T>({
  column,
  row,
  rowKeyValue,
}: {
  column: DataTableColumn<T>;
  row: T;
  rowKeyValue: string | number;
}) {
  const rawValue = getColumnValue(row, column);
  const formatted = column.valueFormatter ? column.valueFormatter(rawValue, row) : rawValue;
  const displayValue = formatted == null ? "" : String(formatted);
  const content = column.render ? column.render(row) : displayValue;
  return (
    <DataTableCellContext.Provider
      value={{
        align: column.align ?? "start",
        monospace: column.monospace ?? false,
        row,
        rowKey: rowKeyValue,
        columnKey: column.key,
        filterKey: column.filterKey,
        value: displayValue,
        rawValue,
      }}
    >
      <DataTableCell data-column={column.key}>{content}</DataTableCell>
    </DataTableCellContext.Provider>
  );
}
