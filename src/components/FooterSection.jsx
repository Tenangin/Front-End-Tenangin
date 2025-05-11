import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#2563EB", color: "white" }}>
      <div className="container py-5">
        <div className="row">
          {/* Brand */}
          <div className="col-md-3 mb-4">
            <h3 className="fw-bold">Tenangin<span className="text-white">.</span></h3>
            <p className="text-white">Where your mind <br /> finds peace</p>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled text-white">
              <li className="mb-2">About us</li>
              <li className="mb-2">Contact us</li>
              <li className="mb-2">News & Press</li>
              <li className="mb-2">Library</li>
              <li className="mb-2">Career</li>
            </ul>
          </div>

          {/* Essentials */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Essentials</h5>
            <ul className="list-unstyled text-white">
              <li className="mb-2">Pricing</li>
              <li className="mb-2">Services</li>
              <li className="mb-2">Privacy policy</li>
              <li className="mb-2">User Agreement</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Follow us</h5>
            <ul className="list-unstyled text-white">
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Instagram</li>
              <li className="mb-2">Newsletter</li>
              <li className="mb-2">LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="border-top"
        style={{ borderColor: "#ffffff22", padding: "20px 0" }}
      >
        <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center text-white-50 small">
          <strong className="text-white me-4">Tenangin</strong>
          <div className="me-4">Copyrights ©2025</div>
          <div className="me-4">All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
