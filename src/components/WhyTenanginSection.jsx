import React from "react";

const values = [
  {
    icon: "🔒",
    title: "Confidential",
    desc: "Your thoughts and feelings are safe with us. We prioritize your privacy at every step.",
  },
  {
    icon: "💙",
    title: "Compassionate",
    desc: "Designed with empathy, Tenangin listens and responds with care—not judgment.",
  },
  {
    icon: "⏳",
    title: "Consistent",
    desc: "Always available when you need us—any day, any time, without appointments.",
  },
];

function WhyTenanginSection() {
  return (
    <section className="py-5 bg-white mt-5">
      <div className="container text-center">
        <h2 className="fw-bold text-primary mb-3">Why Tenangin?</h2>
        <p className="text-secondary mb-5">
          A place where your healing truly matters
        </p>

        <div className="row justify-content-center mb-5">
          {values.map((val, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="p-4 h-100 shadow-sm rounded-4 border">
                <div className="fs-1 mb-3 text-primary">{val.icon}</div>
                <h5 className="fw-bold">{val.title}</h5>
                <p className="text-secondary">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTenanginSection;
