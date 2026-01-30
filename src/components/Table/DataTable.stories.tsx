import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";
import { tableStoryRows } from "./tableStoryData";

const meta: Meta<typeof DataTable> = {
  title: "Components/Table/DataTable",
  component: DataTable,
};

export default meta;

type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    rowHover: true,
    rowDividers: true,
  },
  render: (args) => (
    <DataTable
      columns={[
        {
          key: "sku",
          header: "SKU",
          sortable: true,
          monospace: true,
          width: 140,
          resizable: true,
        },
        {
          key: "name",
          header: "Product",
          sortable: true,
          width: 220,
        },
        {
          key: "stock",
          header: "Stock",
          sortable: true,
          align: "end",
          monospace: true,
          width: 120,
        },
        {
          key: "fillRate",
          header: "Fill rate",
          sortable: true,
          align: "end",
          monospace: true,
          width: 120,
          valueFormatter: (value) => `${value}%`,
        },
        {
          key: "status",
          header: "Status",
          filterKey: "status",
          width: 120,
        },
      ]}
      rows={tableStoryRows}
      style={{ "--ui2-table-scroll-height": "420px" } as CSSProperties}
      {...args}
    />
  ),
};
