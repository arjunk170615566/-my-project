// src/components/DataTable/DataTable.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, DataTableProps } from "./DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const columns = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const sampleData: User[] = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

const meta: Meta<DataTableProps<User>> = {
  title: "Components/DataTable",
  component: DataTable,
};
export default meta;
type Story = StoryObj<DataTableProps<User>>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
  },
};

export const Selectable: Story = {
  args: {
    data: sampleData,
    columns,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};
