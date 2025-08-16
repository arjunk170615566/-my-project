// src/components/DataTable/DataTable.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable } from "./DataTable";

const columns = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const data = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 30 },
];

test("renders table data", () => {
  render(<DataTable data={data} columns={columns} />);
  expect(screen.getByText("Alice")).toBeInTheDocument();
});

test("handles row selection", () => {
  const onRowSelect = jest.fn();
  render(<DataTable data={data} columns={columns} selectable onRowSelect={onRowSelect} />);
  fireEvent.click(screen.getAllByRole("checkbox")[0]);
  expect(onRowSelect).toHaveBeenCalled();
});

test("shows empty state", () => {
  render(<DataTable data={[]} columns={columns} />);
  expect(screen.getByText("No data available")).toBeInTheDocument();
});
