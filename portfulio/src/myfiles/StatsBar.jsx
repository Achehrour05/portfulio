import React from "react";
import { motion } from "framer-motion";

function StatsBar() {
  const stats = [
    { number: "3+", label: "Expériences Professionnelles" },
    { number: "10+", label: "Projets Full-Stack & IA" },
    { number: "14+", label: "Technologies Maîtrisées" },
    { number: "100%", label: "Engagement & Rigueur" },
  ];

  return (
    <div className="container my-4">
      <div className="row g-3 text-center">
        {stats.map((s, idx) => (
          <div className="col-6 col-md-3" key={s.label}>
            <motion.div
              className="p-3 rounded-4 bg-dark border border-secondary shadow-sm hover-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h3 className="fw-bold text-info mb-1">{s.number}</h3>
              <p className="text-secondary small mb-0">{s.label}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
