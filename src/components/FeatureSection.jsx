import React from "react";

const features = [
  {
    icon: "📝",
    title: "Journaling",
    desc: "Write and release your emotions privately, any time you need.",
  },
  {
    icon: "🤖",
    title: "Chatbot",
    desc: "Talk with our empathetic AI companion, always here to listen.",
  },
  {
    icon: "⏰",
    title: "Reminder",
    desc: "Set healing goals and reminders to keep your journey on track.",
  },
  {
    icon: "🩺",
    title: "Health Check",
    desc: "Self-assess your mental health and identify early warning signs.",
  },
  {
    icon: "🧠",
    title: "Counseling",
    desc: "Get location-based recommendations for nearby help centers.",
  },
];

function FeatureSection() {
  return (
    <section className="py-5 mt-3" style={{ backgroundColor: "#ffffff" }}>
      <div className="container text-center">
        <h2 className="fw-bold text-primary mb-3">
          Features that support your healing journey
        </h2>
        <p className="text-secondary mb-5">
          Explore tools crafted to help you reflect, recover, and rebuild.
        </p>

        <div className="row justify-content-center mb-5">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="bg-white p-4 h-100 shadow rounded-4">
                <div
                  className="fs-1 mb-3"
                  style={{ color: "#4361ee" }}
                >
                  {feature.icon}
                </div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-secondary">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
