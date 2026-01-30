import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { DataTable } from "./DataTable";

describe("DataTable", () => {
  it("renders header and cell content", () => {
    render(
      <DataTable
        columns={[
          { key: "sku", header: "SKU" },
          { key: "stock", header: "Stock" },
        ]}
        rows={[{ sku: "SKU-1001", stock: 10 }]}
      />,
    );

    expect(screen.getByText("SKU")).toBeInTheDocument();
    expect(screen.getByText("SKU-1001")).toBeInTheDocument();
  });

  it("sorts by column on toggle", async () => {
    render(
      <DataTable
        columns={[
          { key: "sku", header: "SKU", sortable: true },
          { key: "stock", header: "Stock", sortable: true },
        ]}
        rows={[
          { sku: "B", stock: 2 },
          { sku: "A", stock: 1 },
        ]}
      />,
    );

    const sortButton = screen.getByRole("button", { name: "Sort SKU" });
    fireEvent.click(sortButton);

    await waitFor(() => {
      const cells = screen.getAllByText(/A|B/).map((node) => node.textContent);
      expect(cells[0]).toBe("A");
    });
  });

  it("pins columns when defaultPinnedColumnsStart provided", () => {
    const { container } = render(
      <DataTable
        columns={[
          { key: "sku", header: "SKU" },
          { key: "stock", header: "Stock" },
        ]}
        rows={[{ sku: "SKU-1001", stock: 10 }]}
        defaultPinnedColumnsStart={["sku"]}
      />,
    );

    const skuHeader = screen.getByText("SKU");
    const group = skuHeader.closest("[data-group]");
    expect(group?.getAttribute("data-group")).toBe("pinned-start");
    expect(container.querySelector('[data-group="pinned-start"]')).toBeTruthy();
  });

  it("auto-adjusts column width on double click", () => {
    const { container } = render(
      <DataTable
        columns={[
          { key: "sku", header: "SKU", resizable: true },
          { key: "stock", header: "Stock" },
        ]}
        rows={[{ sku: "SKU-1001", stock: 10 }]}
      />,
    );

    const skuCells = container.querySelectorAll<HTMLElement>('[data-column="sku"]');
    skuCells.forEach((cell) => {
      const content = cell.querySelector<HTMLElement>("[data-cell-content]") ?? cell;
      Object.defineProperty(content, "scrollWidth", { value: 320, configurable: true });
    });

    const headerCell = screen.getByText("SKU").closest<HTMLElement>('[data-column="sku"]');
    expect(headerCell).toBeTruthy();
    if (!headerCell) return;

    headerCell.getBoundingClientRect = () =>
      ({ left: 0, top: 0, right: 120, bottom: 40, width: 120, height: 40, x: 0, y: 0, toJSON: () => {} });

    const hotspot = headerCell.querySelector<HTMLElement>('[data-resize-hotspot="true"]');
    expect(hotspot).toBeTruthy();
    if (!hotspot) return;

    fireEvent.pointerEnter(hotspot);
    fireEvent.doubleClick(hotspot);

    const scrollContainer = container.querySelector<HTMLElement>("[style*='--ui2-table-grid-regular']");
    expect(scrollContainer?.style.getPropertyValue("--ui2-table-grid-regular")).toContain("320px");
  });

  it("opens context menu for a single cell only", () => {
    const { container } = render(
      <DataTable
        columns={[
          { key: "sku", header: "SKU" },
          { key: "stock", header: "Stock" },
        ]}
        rows={[
          { sku: "SKU-1001", stock: 10 },
          { sku: "SKU-1002", stock: 20 },
        ]}
      />,
    );

    const firstCell = screen.getByText("SKU-1001");
    fireEvent.contextMenu(firstCell);

    const activeOutlines = container.querySelectorAll('span[data-active="true"]');
    expect(activeOutlines.length).toBe(1);
  });

  it("closes context menu on scroll", () => {
    const { container } = render(
      <DataTable
        columns={[
          { key: "sku", header: "SKU" },
          { key: "stock", header: "Stock" },
        ]}
        rows={[
          { sku: "SKU-1001", stock: 10 },
          { sku: "SKU-1002", stock: 20 },
        ]}
      />,
    );

    const firstCell = screen.getByText("SKU-1001");
    fireEvent.contextMenu(firstCell);
    expect(container.querySelector('span[data-active="true"]')).toBeTruthy();

    fireEvent.scroll(window);
    expect(container.querySelector('span[data-active="true"]')).toBeFalsy();
  });
});
