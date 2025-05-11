import React from "react";
import "../styles/Register.css";

function Register() {
  return (
    <div className="register-container d-flex">
      {/* Kiri: Ilustrasi */}
      <div className="register-left d-flex flex-column align-items-center justify-content-between">
        <img src="/images/flowers-top.svg" alt="Flowers Top" className="flowers-top" />
        <img src="/images/logo-brain.svg" alt="Logo Brain" className="logo-brain" />
        <img src="/images/flowers-bottom.svg" alt="Flowers Bottom" className="flowers-bottom" />
      </div>

      {/* Kanan: Formulir */}
      <div className="register-right">
        <div className="register-form-container">
          <h1 className="fw-bold mb-5 text-center">Sign Up</h1>

          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-person"></i></span>
                <input type="text" className="form-control" id="username" placeholder="John Doe" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                <input type="email" className="form-control" id="email" placeholder="johndoe@example.com" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-shield-lock"></i></span>
                <input type="password" className="form-control" id="password" placeholder="********" />
                <span className="input-group-text"><i className="bi bi-eye-slash"></i></span>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label">Re-Enter Password</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-key"></i></span>
                <input type="password" className="form-control" id="confirmPassword" placeholder="password123" />
                <span className="input-group-text"><i className="bi bi-eye"></i></span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold">
              Create Account
            </button>
          </form>

          <p className="text-center mt-3">
            Already have an account? <a href="/login" className="text-decoration-none fw-semibold">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
