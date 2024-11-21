import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Алдааны мессеж хадгалах
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Нэвтрэх эхэнд алдааны мессежийг арилгана
  
    if (username === "admin" && password === "admin") {
      navigate("/admin"); // Талбаруудын зөв нэвтрэх үед шилжүүлнэ
    } else if (username === "employee" && password === "employee") {
      navigate("/employee"); // Талбаруудын зөв нэвтрэх үед шилжүүлнэ
    } else {
      setErrorMessage("Нэвтрэх нэр эсвэл нууц үг буруу байна!"); // Алдааны мессеж харуулах
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Хүний Нөөцийн Систем</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Нэвтрэх нэр:
            <input
              type="text"
              placeholder="Нэвтрэх нэр"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Нууц үг:
            <input
              type="password"
              placeholder="Нууц үг"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="login-button">
            Нэвтрэх
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="login-footer">
           Нууц үгээ мартасан?
        </p>
      </div>
    </div>
  );
}

export default Login;
