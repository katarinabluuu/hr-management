import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Админы Хяналтын Самбар</h1>
        <p>Энд таны хяналтын мэдээлэл харагдана</p>
      </header>

      <main className="admin-main">
        <section className="admin-card">
          <h2>Нүүр хуудас</h2>
          <p>Хяналтын ерөнхий тойм.</p>
        </section>
        <section className="admin-card">
          <h2>Ажилчдын мэдээлэл</h2>
          <p>Ажилчдын бүртгэл болон удирдлага.</p>
        </section>
        <section className="admin-card">
          <h2>Цагийн бүртгэл</h2>
          <p>Ажилтнуудын ирцийн мэдээлэл.</p>
        </section>
        <section
          className="admin-card"
          onClick={() => navigate("/admin/leave-requests")}
          style={{ cursor: "pointer" }}
        >
          <h2>Чөлөөний хүсэлт</h2>
          <p>Ажилтнуудын гаргасан хүсэлтийг удирдах.</p>
        </section>
        <section className="admin-card">
          <h2>Гүйцэтгэлийн үнэлгээ</h2>
          <p>Ажилтнуудын ажлын гүйцэтгэлийг үнэлэх.</p>
        </section>  
        <section className="admin-card">
          <h2>Тайлан</h2>
          <p>Ажлын үр дүнгийн тайлан гаргах.</p>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
