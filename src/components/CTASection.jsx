import React from "react";
import { Link } from "react-router-dom";

function CTASectionVisual() {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#f4f7ff", minHeight: "500px" }}
    >
      <div className="container mt-5">
        <div className="row align-items-center justify-content-between">
          {/* Kiri: Teks CTA */}
          <div className="col-md-8 text-center text-md-start mb-4 mb-md-0">
            <h2 className="fw-bold text-primary mb-3">
              Your story deserves a space
            </h2>
            <p className="text-secondary mb-4">
              Let Tenangin be the place where you heal, reflect, and grow — at your own pace.
            </p>
            <Link
              to="/register"
              className="btn btn-primary rounded-pill px-4 py-2"
            >
              Start Writing →
            </Link>
          </div>

          {/* Kanan: Ilustrasi */}
          <div className="col-md-4 text-center">
            <img
              src="/images/cta-illustration.svg"
              alt="Writing illustration"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASectionVisual;
