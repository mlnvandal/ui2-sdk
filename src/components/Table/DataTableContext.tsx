import { createContext, useContext } from "react";

export type DataTableSorting = {
  sortBy: string | null;
  sortOrder: "asc" | "desc";
};

export type DataTableContextValue = {
  sorting: DataTableSorting;
  setSorting: (sorting: DataTableSorting) => void;
  pinnedColumnsStartKeys: string[];
  pinnedColumnsEndKeys: string[];
  pinColumn: (key: string) => void;
  unpinColumn: (key: string) => void;
  hideColumn: (key: string) => void;
  columnsReordering: boolean;
  columnsPinControl: boolean;
  columnsVisibilityControl: boolean;
  startDragging: (event: MouseEvent, key: string) => void;
  draggedColumnKey: string | null;
  targetColumnKey: string | null;
  draggedColumnIndex: number;
  targetColumnIndex: number;
  filterableColumnKeys: Set<string>;
  filterByColumn: (columnKey: string, filterKey?: string) => void;
  filterByValue: (columnKey: string, filterKey: string | undefined, value: unknown) => void;
  activeContextMenuKey: string | null;
  setActiveContextMenuKey: (key: string | null) => void;
  getRowKey: (row: unknown) => string | number;
};

export const DataTableContext = createContext<DataTableContextValue | null>(null);

export function useDataTableContext() {
  const ctx = useContext(DataTableContext);
  if (!ctx) {
    throw new Error("DataTableContext is missing");
  }
  return ctx;
}

export type DataTableCellContextValue = {
  align: "start" | "end" | "center";
  monospace: boolean;
  row?: unknown;
  rowKey?: string | number;
  columnKey?: string;
  filterKey?: string;
  value: string;
  rawValue: unknown;
};

export const DataTableCellContext = createContext<DataTableCellContextValue | null>(null);

export function useDataTableCellContext() {
  const ctx = useContext(DataTableCellContext);
  if (!ctx) {
    throw new Error("DataTableCellContext is missing");
  }
  return ctx;
}
