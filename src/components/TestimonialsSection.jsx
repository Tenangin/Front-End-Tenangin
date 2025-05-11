import React from "react";

const testimonials = [
  {
    name: "Aisyah, 23",
    avatar: "/images/avatar1.jpg",
    quote:
      "Tenangin helped me through my darkest days. Journaling every night made a huge difference.",
  },
  {
    name: "Raka, 27",
    avatar: "/images/avatar2.jpg",
    quote:
      "I didn’t think an AI chatbot could feel so human. It really listens when no one else does.",
  },
  {
    name: "Sinta, 20",
    avatar: "/images/avatar3.jpg",
    quote:
      "I love setting reminders. Small goals every week made me believe I can heal.",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold text-primary mb-3">What our users say</h2>
        <p className="text-secondary mb-5">Real voices from real journeys</p>

        <div className="row justify-content-center">
          {testimonials.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="p-4 h-100 shadow-sm rounded-4 border text-start bg-light">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="rounded-circle me-3"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                  <h6 className="mb-0 fw-bold">{item.name}</h6>
                </div>
                <p className="text-secondary fst-italic">"{item.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
