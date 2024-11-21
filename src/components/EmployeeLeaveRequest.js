import React, { useState } from "react";
import "./EmployeeLeaveRequest.css";

function EmployeeLeaveRequest() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      type: "Эмнэлгийн чөлөө",
      startDate: "2024-11-20",
      endDate: "2024-11-24",
      status: "Хүлээгдэж байна",
    },
  ]);

  const [formData, setFormData] = useState({
    type: "",
    startDate: "",
    endDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequests([
      ...requests,
      {
        id: requests.length + 1,
        type: formData.type,
        startDate: formData.startDate,
        endDate: formData.endDate,
        status: "Хүлээгдэж байна",
      },
    ]);
    setFormData({ type: "", startDate: "", endDate: "" });
    alert("Чөлөөний хүсэлт амжилттай гарлаа!");
  };

  return (
    <div className="employee-leave-request">
      <h1>Чөлөөний Хүсэлт</h1>

      {/* Чөлөөний хүсэлт гаргах маягт */}
      <form className="leave-form" onSubmit={handleSubmit}>
        <label>
          Чөлөөний төрөл:
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            required
          >
            <option value="" disabled>
              Сонгоно уу
            </option>
            <option value="Эмнэлгийн чөлөө">Эмнэлгийн чөлөө</option>
            <option value="Жил бүрийн амралт">Жил бүрийн амралт</option>
            <option value="Гэр бүлийн чөлөө">Гэр бүлийн чөлөө</option>
          </select>
        </label>

        <label>
          Эхлэх огноо:
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) =>
              setFormData({ ...formData, startDate: e.target.value })
            }
            required
          />
        </label>

        <label>
          Дуусах огноо:
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) =>
              setFormData({ ...formData, endDate: e.target.value })
            }
            required
          />
        </label>

        <button type="submit">Хүсэлт илгээх</button>
      </form>

      {/* Гаргасан чөлөөний хүсэлтүүдийн жагсаалт */}
      <div className="leave-list">
        <h2>Гаргасан Хүсэлтүүд</h2>
        <table className="leave-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Чөлөөний төрөл</th>
              <th>Эхлэх огноо</th>
              <th>Дуусах огноо</th>
              <th>Төлөв</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((request, index) =>
                request.type && request.startDate && request.endDate && request.status ? (
                  <tr key={request.id}>
                    <td>{index + 1}</td>
                    <td>{request.type}</td>
                    <td>{request.startDate}</td>
                    <td>{request.endDate}</td>
                    <td>{request.status}</td>
                  </tr>
                ) : null
              )
            ) : (
              <tr>
                <td colSpan="5">Хүсэлтүүд байхгүй байна</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeLeaveRequest;
