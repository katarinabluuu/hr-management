import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";
import EmployeeLeaveRequest from "./components/EmployeeLeaveRequest";
import LeaveRequests from "./components/LeaveRequests";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/leave-requests" element={<LeaveRequests />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/employee/leave-requests" element={<EmployeeLeaveRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
