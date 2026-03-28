import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const leads = ["Inbound Lead from Website", "Referral from Partner X"];
  const tasks = ["Follow up on Q3 proposals", "Prepare weekly sales deck"];
  const users = ["Jane Doe", "John Smith", "Alice Johnson"];

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Welcome, {user?.name || "User"}</h1>
        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="dashboard-content">
        <div className="grid-layout">
          <div className="card">
            <h2>
              <span>🎯</span> Leads
            </h2>
            <div className="list">
              {leads.map((l, i) => (
                <div key={i} className="list-item">{l}</div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2>
              <span>✅</span> Tasks
            </h2>
            <div className="list">
              {tasks.map((t, i) => (
                <div key={i} className="list-item">{t}</div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2>
              <span>👥</span> Users
            </h2>
            <div className="list">
              {users.map((u, i) => (
                <div key={i} className="list-item">{u}</div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;