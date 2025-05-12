import React from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container d-flex">
      
      {/* Sidebar */}
      <aside className="sidebar" style={{backgroundColor: "#EFF4FF"}}>
        <div className="p-4">
          <h4 className="fw-bold text-primary">Tenangin</h4>
          <ul className="nav flex-column mt-4">
            <li className="nav-item mb-3">
              <i className="bi bi-house-door me-2" /> Dashboard
            </li>
            <li className="nav-item mb-3">
              <i className="bi bi-journal-text me-2" /> Journaling
            </li>
            <li className="nav-item mb-3">
              <i className="bi bi-clock me-2" /> Reminders
            </li>
            <li className="nav-item mb-3">
              <i className="bi bi-heart-pulse me-2" /> Health Check
            </li>
            <li className="nav-item mb-3">
              <i className="bi bi-robot me-2" /> Teno Bot
            </li>
          </ul>

          <div className="mt-auto p-3 rounded text-white text-center" style={{backgroundColor: "#DBE6FE"}}>
            <p className="mb-1 fw-bold" style={{color: "#2563EB"}}>You are stronger than you think</p>
            <small style={{color: "656565"}}>continue your progress</small>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="dashboard-main flex-grow-1 p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5 className="fw-bold text-primary">Hi Hanif, Good Afternoon!</h5>
            <p className="text-muted">What do you feel today?</p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <input type="text" className="form-control rounded-pill" placeholder="Search" />
            <i className="bi bi-bell fs-5" />
            <img src="/images/user.svg" alt="Profile" className="rounded-circle" width={40} height={40} />
            <span className="fw-semibold">Najmi </span>
          </div>
        </div>

        {/* Highlight Card */}
        <div className="p-4 mb-4 rounded-4 d-flex justify-content-between align-items-center" style={{ backgroundColor: "#EFF4FF" }}>
          <div>
            <h6 className="fw-bold text-primary">You’re not alone. Tenangin is here</h6>
            <p className="text-muted">Your mental well-being matters. Let Tenangin be your safe space to reflect, heal, and grow.</p>
            <button className="btn btn-outline-primary rounded-pill px-4">Get Access</button>
          </div>
          <img src="/images/dashboard-ilustration.svg" alt="illustration" height="120" />
        </div>

        {/* Reminders & Journaling */}
        <div className="row">
          <div className="col-md-6">
            <h6 className="text-primary mb-3">Reminders</h6>
            {["Js", "Nextjs", "React", "React"].map((item, idx) => (
              <div key={idx} className="p-3 rounded-4  d-flex justify-content-between align-items-center mb-3" style={{backgroundColor: "#EFF4FF"}}>
                <div>
                  <h6 className="mb-1 fw-semibold">Week 01 Assignment</h6>
                  <small className="text-muted">{item} assignment</small>
                </div>
                <span className="badge bg-primary rounded-pill">7:00 pm</span>
              </div>
            ))}
          </div>

          <div className="col-md-6">
            <h6 className="text-primary mb-3">Journaling</h6>
            <div className="p-3 rounded-4  mb-3 d-flex justify-content-between" style={{backgroundColor: "#EFF4FF"}}>
              <div>
                <h6 className="mb-1 fw-semibold">My Day</h6>
                <p className="text-muted small mb-0">
                  Today felt a bit slow, but I managed to get some important things done...
                </p>
              </div>
              <span className="badge bg-primary rounded-pill">7:00 pm</span>
            </div>
            {["Nextjs", "React"].map((item, idx) => (
              <div key={idx} className="p-3 rounded-4  d-flex justify-content-between align-items-center mb-3"  style={{backgroundColor: "#EFF4FF"}}>
                <div>
                  <h6 className="mb-1 fw-semibold">Week 01 Assignment</h6>
                  <small className="text-muted">{item} assignment</small>
                </div>
                <span className="badge bg-primary rounded-pill">7:00 pm</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
