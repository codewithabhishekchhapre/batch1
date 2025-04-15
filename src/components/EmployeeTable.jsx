import React from "react";

const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    department: "HR",
    email: "aarav.sharma@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Isha Verma",
    department: "Finance",
    email: "isha.verma@example.com",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    department: "Development",
    email: "rohan.mehta@example.com",
    status: "Active",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    department: "Marketing",
    email: "sneha.kapoor@example.com",
    status: "Active",
  },
];

const EmployeeTable = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-center">Employee Table</h2>
      <button>Add New Employee</button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Department</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {employees.map((emp) => (
              <tr key={emp.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">{emp.id}</td>
                <td className="py-3 px-6">{emp.name}</td>
                <td className="py-3 px-6">{emp.department}</td>
                <td className="py-3 px-6">{emp.email}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      emp.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
