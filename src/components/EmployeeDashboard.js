import React from "react";
import { Link } from "react-router-dom";
import "./EmployeeDashboard.css";

function EmployeeDashboard() {
  return (
    <div className="employee-dashboard">
      <header className="employee-header">
        <h1>Ажилчдын Хяналтын Самбар</h1>
        <nav>
          <ul>
            <li>Нүүр хуудас</li>
            <li>Цагийн бүртгэл</li>
            <li><Link to="/employee/leave-requests">Чөлөөний хүсэлт</Link></li> {/* Чөлөөний хүсэлт рүү шилжих холбоос */}
            <li>Гүйцэтгэлийн үнэлгээ</li>
            <li>Тайлан</li>
          </ul>
        </nav>
      </header>
      <main className="employee-content">
        <h2>Энд ажилчдын мэдээлэл харагдана.</h2>
        <p>Ажилчид энд өөрсдийн ирцийн мэдээлэл, чөлөөний хүсэлт болон гүйцэтгэлийг хянаж тайлан татаж авах боломжтой.</p>
      </main>
    </div>
  );
}

export default EmployeeDashboard;
