import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Бат-Эрдэнэ",
      position: "Программист",
      department: "Хөгжүүлэлт",
      status: "Идэвхтэй",
    },
    {
      id: 2,
      name: "Сүхбаатар",
      position: "Менежер",
      department: "Удирдлага",
      status: "Идэвхтэй",
    },
    {
      id: 3,
      name: "Цэцэгмаа",
      position: "Хүний нөөцийн ажилтан",
      department: "Хүний нөөц",
      status: "Амралттай",
    },
  ]);

  const handleAddEmployee = () => {
    const newEmployee = {
      id: employees.length + 1,
      name: "Шинэ ажилтан",
      position: "Албан тушаал",
      department: "Хэлтэс",
      status: "Идэвхтэй",
    };
    setEmployees([...employees, newEmployee]);
  };

  const handleEdit = (id) => {
    alert(`Ажилтан ID: ${id} засах функц`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Энэ ажилтныг устгах уу?")) {
      setEmployees(employees.filter((employee) => employee.id !== id));
    }
  };

  return (
    <div className="admin-dashboard">
      <Link to="/employees">Ажилчдын Мэдээлэл</Link>
      <div className="employee-controls">
        <button onClick={handleAddEmployee}>+ Ажилтан нэмэх</button>
        <input
          type="text"
          placeholder="Ажилчны нэрээр хайх..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Нэр</th>
            <th>Албан тушаал</th>
            <th>Хэлтэс</th>
            <th>Статус</th>
            <th>Үйлдлүүд</th>
          </tr>
        </thead>
        <tbody>
          {employees
            .filter((emp) => emp.name.toLowerCase().includes(search.toLowerCase()))
            .map((emp, index) => (
              <tr key={emp.id}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
                <td>{emp.department}</td>
                <td>{emp.status}</td>
                <td>
                  <button onClick={() => handleEdit(emp.id)}>Засах</button>
                  <button onClick={() => handleDelete(emp.id)}>Устгах</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
