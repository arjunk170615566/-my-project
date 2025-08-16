import { InputField } from "../components/InputField/InputField";
import { DataTable } from "../components/DataTable/DataTable";
import { useState } from "react";

export default function Demo() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const columns = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "email", title: "Email", dataIndex: "email", sortable: true },
    { key: "role", title: "Role", dataIndex: "role" },
    { key: "status", title: "Status", dataIndex: "status" },
    { key: "join", title: "Join Date", dataIndex: "join" },
  ];

 const data = [
  { id: 1, name: "Aman Sharma", email: "aman.sharma@example.com", role: "Editor", status: "active", join: "2023-02-20" },
  { id: 2, name: "Riya Verma", email: "riya.verma@example.com", role: "Viewer", status: "inactive", join: "2023-03-10" },
  { id: 3, name: "Karan Singh", email: "karan.singh@example.com", role: "Viewer", status: "inactive", join: "2023-06-18" },
  { id: 4, name: "Neha Gupta", email: "neha.gupta@example.com", role: "Admin", status: "active", join: "2023-01-15" },
  { id: 5, name: "Vikram Rao", email: "vikram.rao@example.com", role: "Editor", status: "active", join: "2023-04-05" },
  { id: 6, name: "Ananya Iyer", email: "ananya.iyer@example.com", role: "Admin", status: "active", join: "2023-05-12" },
];


  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      {/* Input Showcase */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">InputField Component</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-4">
            <InputField
              label="Text Input (Outlined)"
              placeholder="Enter your text"
              helperText="This is a helper text"
              variant="outlined"
            />
            <InputField
              label="Password Input"
              type="password"
              placeholder="Enter your password"
              variant="outlined"
            />
            <InputField
              label="Email (Filled Variant)"
              placeholder="Enter your email"
              variant="filled"
            />
          </div>
          {/* Right column */}
          <div className="space-y-4">
            <InputField
              label="Small Size (Ghost)"
              placeholder="Small input"
              helperText="Ghost variant with small size"
              variant="ghost"
              size="sm"
            />
            <InputField
              label="Invalid State"
              placeholder="This field has an error"
              invalid
              errorMessage="This field is required"
              variant="outlined"
            />
            <InputField
              label="Disabled State"
              placeholder="This input is disabled"
              disabled
              helperText="This field is disabled"
              variant="outlined"
            />
            <InputField
              label="Loading State"
              placeholder="Loading..."
              loading
              helperText="This field is currently loading"
              variant="outlined"
            />
          </div>
        </div>
      </div>

      {/* DataTable Showcase */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">DataTable Component</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          Sortable table with row selection
        </p>
        <DataTable data={data} columns={columns} selectable />
      </div>
    </div>
  );
}
