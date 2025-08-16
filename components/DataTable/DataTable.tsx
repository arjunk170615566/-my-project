import React, { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [selected, setSelected] = useState<Set<string | number>>(new Set());
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; asc: boolean }>();

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.asc ? -1 : 1;
      if (aVal > bVal) return sortConfig.asc ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const toggleSelect = (id: string | number) => {
    const newSet = new Set(selected);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelected(newSet);
    onRowSelect?.(data.filter((row) => newSet.has(row.id)));
  };

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    setSortConfig((prev) =>
      prev?.key === col.dataIndex
        ? { key: col.dataIndex, asc: !prev.asc }
        : { key: col.dataIndex, asc: true }
    );
  };

  if (loading) return <p className="p-4">Loading...</p>;
  if (!data.length) return <p className="p-4 text-gray-500">No data available</p>;

  return (
    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th className="px-3 py-2"></th>}
          {columns.map((col) => (
            <th
              key={col.key}
              onClick={() => handleSort(col)}
              className={`px-3 py-2 text-left cursor-pointer select-none ${
                col.sortable ? "hover:bg-gray-200" : ""
              }`}
            >
              {col.title}
              {sortConfig?.key === col.dataIndex && (
                <span className="ml-1">{sortConfig.asc ? "▲" : "▼"}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, idx) => (
          <tr
            key={row.id}
            className={`border-t ${
              idx % 2 === 0 ? "bg-gray-50" : "bg-white"
            } hover:bg-blue-50`}
          >
            {selectable && (
              <td className="px-3 py-2">
                <input
                  type="checkbox"
                  checked={selected.has(row.id)}
                  onChange={() => toggleSelect(row.id)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className="px-3 py-2">
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
