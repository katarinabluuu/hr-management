import React, { useState } from "react";
import "./LeaveRequests.css";

function LeaveRequests() {
  const [requests] = useState([
    {
      id: 1,
      name: "Бат-Эрдэнэ",
      reason: "Эмнэлгийн чөлөө",
      days: 5,
      startDate: "2024-11-20",
      endDate: "2024-11-24",
    },
    {
      id: 2,
      name: "Сүхбаатар",
      reason: "Гэр бүлийн чөлөө",
      days: 3,
      startDate: "2024-11-21",
      endDate: "2024-11-23",
    },
    {
      id: 3,
      name: "Цэцэгмаа",
      reason: "Жил бүрийн амралт",
      days: 10,
      startDate: "2024-11-15",
      endDate: "2024-11-24",
    },
  ]);

  const handleAction = (action, requestId) => {
    alert(`Хүсэлт #${requestId} дээр "${action}" сонгосон`);
  };

  return (
    <div className="leave-requests">
      <h1>Чөлөөний Хүсэлтүүд</h1>
      <table className="leave-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Нэр</th>
            <th>Шалтгаан</th>
            <th>Чөлөөний хоног</th>
            <th>Эхлэх огноо</th>
            <th>Дуусах огноо</th>
            <th>Үйлдлүүд</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={request.id}>
              <td>{index + 1}</td>
              <td>{request.name}</td>
              <td>{request.reason}</td>
              <td>{request.days}</td>
              <td>{request.startDate}</td>
              <td>{request.endDate}</td>
              <td>
                <div className="dropdown">
                  <button className="dropdown-button">Үйлдлүүд</button>
                  <div className="dropdown-menu">
                    <button onClick={() => handleAction("Зөвшөөрөх", request.id)}>
                      Зөвшөөрөх
                    </button>
                    <button onClick={() => handleAction("Татгалзах", request.id)}>
                      Татгалзах
                    </button>
                    <button onClick={() => handleAction("Дэлгэрэнгүй", request.id)}>
                      Дэлгэрэнгүй
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveRequests;
